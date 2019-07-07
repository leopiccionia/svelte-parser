module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-spacing': [2, {
      selfClosingTag: 'never'
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/script-indent': [2, 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    'vue/singleline-html-element-content-newline': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
