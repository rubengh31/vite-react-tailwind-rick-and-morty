export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test|tests).[tj]s?(x)'], //indica donde se van a encontrar nuestros test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
