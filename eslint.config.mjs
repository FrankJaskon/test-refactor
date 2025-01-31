import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      'no-async-promise-executor': 0,
      '@typescript-eslint/no-explicit-any': 1,
      'max-len': [2, { code: 80 }],
      'semi': [2, 'never'],
      'comma-dangle': [2, 'always-multiline'],
      'quotes': [2, 'single'],
      'object-curly-spacing': [2, 'always'],
    },
  },
]
