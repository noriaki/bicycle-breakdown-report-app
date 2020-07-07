module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  root: true,
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  }
};
