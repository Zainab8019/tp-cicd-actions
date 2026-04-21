export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];