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
  parser: "babel-eslint", // for  state = { toggle: false} // Unexpected token = (which is purely a babel syntax)
  plugins: ["react"],
  rules:{
    "react/jsx-filename-extension": "off",
  }
};
