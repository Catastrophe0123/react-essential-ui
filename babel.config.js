module.exports = {
    env: {
        test: {
            plugins: ['dynamic-import-node'],
        },
    },
    presets: ['@babel/preset-env', '@babel/preset-react'],

    // presets: [['env', { modules: false }]],
    plugins: [
        'syntax-dynamic-import',
        // 'dynamic-import-node'`
    ],
};
