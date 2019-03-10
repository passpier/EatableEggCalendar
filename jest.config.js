module.exports = {
  preset: "react-native",
  testURL: "https://example.com",
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["/node_modules/", "src/__tests__/test-helper", "dist", "e2e", "ios", "android", "storybook"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageReporters: ["text"],
  timers: "fake",
};
