module.exports = {
    // preset: 'ts-jest',
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'node',
    // testMatch: "**/__tests__/**/*.[jt]s?(x)"
    // testMatch: ['**/tests/**/*.[jt]s?(x)'],
    testMatch: ['**/tests/*.[jt]s?(x)'],
    globals: {
        'ts-jest': {
            babelConfig: {
                env: {
                    test: {
                        plugins: [
                            'syntax-dynamic-import',
                            'dynamic-import-node',
                        ],
                    },
                },
            },
        },
    },
};
