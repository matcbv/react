module.exports = {
    testEnvironment: "node",
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(msw|@bundled-es-modules)/)',
    ]
};
