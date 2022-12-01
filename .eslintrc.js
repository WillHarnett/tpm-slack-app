module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: 'airbnb-base',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        'object-shorthand': ['error', 'never'],
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
        indent: ['error', 4]
    },
    globals: {
        EventSource: true
    }
};
