/** საერთო სტილი input/select/textarea-სთვის (design/contact.tsx → Field) */
export const fieldBase =
  'block w-full rounded-2xl border bg-ink-50 px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-400 outline-none transition-[border-color,box-shadow] focus:border-brand-800 focus:ring-2 focus:ring-brand-100'

export function fieldState(error?: string) {
  return error ? 'border-brand-600 ring-2 ring-brand-100' : 'border-ink-200 hover:border-ink-300'
}
