module.exports = {
    transform: {'^.+\\.jsx?$': 'babel-jest'},
    extensionsToTreatAsEsm: ['.js', '.jsx'],
    transformIgnorePatterns: [
        '/node_modules/(?!(msw|@bundled-es-modules)/)', // Ignora tudo, exceto `msw` e `statuses`
    ],
};
