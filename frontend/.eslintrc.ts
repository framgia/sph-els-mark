module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      files: ['*.css'],
      plugins: ['stylelint'],
      extends: ['stylelint-config-standard'],
    },
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    {
      extends: ['xo-typescript', 'prettier'],
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'security'],
  rules: {},
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['warn'],
  'react/react-in-jsx-scope': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
};
