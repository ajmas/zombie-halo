module.exports = {
    'env': {
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'process': true
    },
    'settings': {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
            'modules': true
        }
    },
    'plugins': [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
        'eslint-plugin-import'
    ],
    'rules': {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single'
        ],
        "max-classes-per-file": ['warn', 1],
        'comma-dangle': 'error',
        'curly': 'error',
        'eqeqeq': [
            'error',
            'always'
        ],
        'no-trailing-spaces': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'no-console': 'error',
        'no-throw-literal': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-cycle': 'warn',
        'import/no-self-import': 'error',
        'import/no-unresolved': 'error',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'id-length': [2, { 'exceptions': 'ij'.split(''), 'properties': 'never' }],
        'space-before-blocks': 'error',
        'keyword-spacing': 'error',
        'space-before-function-paren': 'error',
        'camelcase': ['error', { ignoreDestructuring: true }],
        'semi': 'error',
        'no-underscore-dangle': ['error', { 'allow': ['_id', '__history'] }],
        'no-duplicate-imports': 'error',
    },
    'overrides': [{
        'files': ['*.ts', '*.tsx'],
        'parserOptions': {
            'project': 'tsconfig.json',
            'sourceType': 'module',
            'ecmaFeatures': {
                'modules': true
            }
        },
        'rules': {
            '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
            'no-undef': 'off'
        },
        'env': {
            'es6': true,
            'node': true
        }
    }, {
        'files': ['test/*.js'],
        'parserOptions': {
            'ecmaVersion': 6,
            'sourceType': 'module',
            'ecmaFeatures': {
                'modules': true
            }
        },
        'env': {
            'es6': true,
            'mocha': true,
            'node': true
        },
        'rules': {
            // Added since depending on src breaks blackbox testing
            'no-restricted-imports': ['warn', {
                'patterns': ['../src/*'],
            }],

        }
    }]
};
