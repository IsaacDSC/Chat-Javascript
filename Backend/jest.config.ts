/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        "@models/(.*)": "<rootDir>/src/models/$1",
        "@services/(.*)": "<rootDir>/src/services/$1",
        "@UseCases/(.*)": "<rootDir>/src/UseCases/$1",
        "@utils/(.*)": "<rootDir>/src/utils/$1",
        "@helpers/(.*)": "<rootDir>/src/helpers/$1",
        "@config/(.*)": "<rootDir>/src/config/$1",
        "@middlewares/(.*)": "<rootDir>/src/middlewares/$1",
        "@routes/(.*)": "<rootDir>/src/routes/$1",
        "@controllers/(.*)": "<rootDir>/src/controllers/$1",
        "@events/(.*)": "<rootDir>/src/events/$1",
        "@interfaces/(.*)": "<rootDir>/src/interfaces/$1",
        "@types/(.*)": "<rootDir>/src/types/$1",
        "@validations/(.*)": "<rootDir>/src/validations/$1",
        "@queues/(.*)": "<rootDir>/src/queues/$1",
        "@procedules/(.*)": "<rootDir>/src/procedules/$1",
        "@log/(.*)": "<rootDir>/src/log/$1",
        "@vscode/(.*)": "<rootDir>/.vscode/$1",
    },
    // cacheDirectory: "./tmp/",
    testTimeout: 1000000,
    coverageReporters: ['clover', 'json', 'lcov', ['text', { 'skipFull': true }]]
};
