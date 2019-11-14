module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  rules: {
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'require-atomic-updates': 'off',
    'node/no-unsupported-features/es-syntax': 'off'
  },
};
