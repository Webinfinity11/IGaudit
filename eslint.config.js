import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  // design/ — React დიზაინ-მაკეტები (წყარო), არა აპის კოდი
  { ignores: ['dist/**', 'node_modules/**', '.vite-ssg-temp/**', 'design/**', 'tailwind.design.config.js'] },
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      // TS-ის optional prop-ები undefined-ით — default საჭირო არ არის
      'vue/require-default-prop': 'off',
    },
  },
)
