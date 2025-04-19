// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    //"indent": ["error", 2],
    //"prettier/prettier": "error",
  },
  ignorePatterns: ["/dist/*"],
};
