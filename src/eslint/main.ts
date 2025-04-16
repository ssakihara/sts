import js from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';
import tsEslint from 'typescript-eslint';
import * as pluginImportX from 'eslint-plugin-import-x';
import stylisticJs from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export const eslintConfig = [
  {
    ...js.configs.recommended,
    ...nodePlugin.configs['flat/recommended'],
    ...pluginImportX.flatConfigs.recommended,
    ...pluginImportX.flatConfigs.typescript,
    ...stylisticJs.configs.recommended,
    ...stylisticTs.configs.all,
    plugins: {
      n: nodePlugin,
      import: pluginImportX,
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      'block-scoped-var': 'error',
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eol-last': 'error',
      'prefer-arrow-callback': 'error',
      'no-trailing-spaces': 'error',
      quotes: ['warn', 'single', {avoidEscape: true}],
      'no-restricted-properties': [
        'error',
        {
          object: 'describe',
          property: 'only',
        },
        {
          object: 'it',
          property: 'only',
        },
      ],
    },
  },
  ...tsEslint.configs.recommended.map(config => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  {
    name: 'locals/gts-rule',
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-warning-comments': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/camelcase': 'off',
      'n/no-missing-import': 'off',
      'n/no-empty-function': 'off',
      'n/no-unsupported-features/es-syntax': 'off',
      'n/no-missing-require': 'off',
      'n/shebang': 'off',
      'n/no-unpublished-import': [
        'error',
        {
          convertPath: [
            {
              include: ['src/**'],
              replace: ['^src/(.+)$', 'build/$1'],
            },
          ],
        },
      ],
      'no-dupe-class-members': 'off',
      'require-atomic-updates': 'off',
    },
  },
  {
    name: 'locals/format/js',
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/quotes': [
        'error',
        'single',
      ],
      '@stylistic/js/semi': [
        'error',
        'always',
      ],
      '@stylistic/js/comma-spacing': [
        'error',
      ],
      '@stylistic/js/key-spacing': [
        'error',
      ],
    }
  },
  {
    name: 'locals/format/ts',
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@stylistic/ts/indent': [
        'error',
        2
      ],
      '@stylistic/ts/quotes': [
        'error',
        'single',
      ],
      '@stylistic/ts/semi': [
        'error',
        'always',
      ],
      '@stylistic/ts/comma-spacing': [
        'error',
      ],
      '@stylistic/ts/key-spacing': [
        'error',
      ],
    }
  },
  {
    name: 'locals/ignore',
    ignores: ['dist/'],
  },
];
