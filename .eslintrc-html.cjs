module.exports = {
  root: true,
  parser: "@html-eslint/parser",
  plugins: ["@html-eslint"],
  extends: ["plugin:@html-eslint/recommended"],
  rules: {
    "@html-eslint/use-baseline": "off",
  },
};

