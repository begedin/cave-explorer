module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
  ],
  env: {
    'browser': true
  },
  rules: {
    'no-console': 'off',
    'camelcase': 'off',
    'key-spacing': 'off',
    'new-cap': 'off',
    'semi': 2
  }
};
