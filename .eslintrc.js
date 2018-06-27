module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true, // understand require keyword;
    mocha: true,
    jest: true
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["react"]
};
