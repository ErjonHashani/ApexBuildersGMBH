module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/api/(.*)$": "<rootDir>/src/api/$1",
    "^@/src/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
};
