module.exports = {
    
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Transpila arquivos JavaScript usando o Babel
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(msw|@bundled-es-modules)/)', // Transpila apenas os pacotes específicos
    ],
};
