module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: '18.2.0'
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'eslint-config-prettier'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs,jsx}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // "no-unused-vars": "warn",
    'react/prop-types': 'off',
    'space-before-function-paren': 0
  }
}
