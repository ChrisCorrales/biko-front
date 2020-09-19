module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': 0,
    'react/jsx-props-no-spreading': 0,
    camelcase: 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'react/jsx-wrap-multilines': 0,
    'no-unused-vars': 0,
    'no-dupe-class-members': 0,
    'no-underscore-dangle': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    'class-methods-use-this': 0,
    curly: [2, 'all'],
    'lines-between-class-members': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-use-before-define': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
  },
};