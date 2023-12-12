module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'xo',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
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
  plugins: ['react', 'security', 'security'],
  rules: {},
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['warn'],
  'react/react-in-jsx-scope': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
};
