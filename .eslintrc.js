module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
