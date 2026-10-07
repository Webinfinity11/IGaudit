import { reactive, ref } from 'vue'
import { serviceSlugs } from '@/content/services'

export type ServiceChoice = (typeof serviceSlugs)[number] | 'other' | ''

export interface ContactFields {
  name: string
  company: string
  phone: string
  email: string
  service: ServiceChoice
  message: string
  consent: boolean
  /** honeypot - ადამიანი ვერ ხედავს; შევსებული = ბოტი */
  website: string
}

export type FieldName = Exclude<keyof ContactFields, 'website'> | 'captcha'
/** მნიშვნელობა - i18n გასაღები contact.errors.* */
export type ErrorKey =
  | 'required'
  | 'nameLength'
  | 'companyLength'
  | 'phone'
  | 'email'
  | 'messageLength'
  | 'consent'
  | 'captcha'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateField(
  field: FieldName,
  f: ContactFields,
  captchaToken = '',
): ErrorKey | null {
  switch (field) {
    case 'name': {
      const v = f.name.trim()
      if (!v) return 'required'
      return v.length < 2 || v.length > 100 ? 'nameLength' : null
    }
    case 'company':
      return f.company.trim().length > 150 ? 'companyLength' : null
    case 'phone': {
      const v = f.phone.trim()
      if (!v) return 'required'
      if (!/^\+?[\d\s]+$/.test(v)) return 'phone'
      const digits = v.replace(/\D/g, '').length
      return digits < 9 || digits > 15 ? 'phone' : null
    }
    case 'email': {
      const v = f.email.trim()
      if (!v) return 'required'
      return EMAIL_RE.test(v) && v.length <= 254 ? null : 'email'
    }
    case 'service':
      return f.service ? null : 'required'
    case 'message':
      return f.message.length > 2000 ? 'messageLength' : null
    case 'consent':
      return f.consent ? null : 'consent'
    case 'captcha':
      return import.meta.env.VITE_TURNSTILE_SITE_KEY && !captchaToken ? 'captcha' : null
  }
}

const FIELDS: FieldName[] = [
  'name',
  'company',
  'phone',
  'email',
  'service',
  'message',
  'consent',
  'captcha',
]

export type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export function useContactForm(initialService: ServiceChoice = '') {
  const fields = reactive<ContactFields>({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService,
    message: '',
    consent: false,
    website: '',
  })
  const errors = reactive<Partial<Record<FieldName, ErrorKey>>>({})
  const touched = reactive<Partial<Record<FieldName, boolean>>>({})
  const status = ref<SubmitStatus>('idle')
  const captchaToken = ref('')

  function check(field: FieldName) {
    const error = validateField(field, fields, captchaToken.value)
    if (error) errors[field] = error
    else delete errors[field]
    return !error
  }

  /** blur-ზე ვალიდაცია; შემდეგ - ყოველ ცვლილებაზე, რომ შეცდომა სწრაფად გაქრეს */
  function onBlur(field: FieldName) {
    touched[field] = true
    check(field)
  }
  function onInput(field: FieldName) {
    if (touched[field]) check(field)
  }

  function validateAll(): FieldName | null {
    let firstInvalid: FieldName | null = null
    for (const field of FIELDS) {
      touched[field] = true
      if (!check(field) && !firstInvalid) firstInvalid = field
    }
    return firstInvalid
  }

  /** @returns პირველი არავალიდური ველი (ფოკუსისთვის) ან null */
  async function submit(subject: string, serviceLabel: string): Promise<FieldName | null> {
    if (status.value === 'sending') return null
    const invalid = validateAll()
    if (invalid) return invalid

    // honeypot შევსებულია - ვაჩვენებთ წარმატებას, მაგრამ არაფერს ვაგზავნით
    if (fields.website) {
      status.value = 'success'
      return null
    }

    status.value = 'sending'
    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT || 'https://api.web3forms.com/submit'
      const payload: Record<string, string> = {
        subject,
        from_name: fields.name.trim(),
        name: fields.name.trim(),
        company: fields.company.trim(),
        phone: fields.phone.trim(),
        email: fields.email.trim(),
        service: serviceLabel,
        message: fields.message.trim(),
        consent: 'yes',
      }
      if (import.meta.env.VITE_FORM_KEY) payload.access_key = import.meta.env.VITE_FORM_KEY
      if (captchaToken.value) payload['cf-turnstile-response'] = captchaToken.value

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = (await res.json().catch(() => ({}))) as { success?: boolean }
      status.value = res.ok && data.success !== false ? 'success' : 'error'
    } catch {
      status.value = 'error'
    }
    return null
  }

  return { fields, errors, status, captchaToken, onBlur, onInput, submit, check }
}
