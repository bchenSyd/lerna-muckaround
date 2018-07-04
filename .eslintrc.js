module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true, // understand require keyword;
    mocha: true,
    jest: true
  },
  // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["react"],
  rules:{
    "react/jsx-filename-extension": "off",
  }
};
