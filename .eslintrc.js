module.exports = {
    "env": {
        "node": true, // address require undefined issue
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module" // 'import' and 'export' may apprea only with 'sourceType: module'
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": ["warn" /*1, [1],  or warn*/, "unix"],
        "no-unused-vars": [1],
        "no-unused-labels": 1,
        "indent": "off",
        "semi": ["warn", "always"],
        "quotes": ["error" /*2 or error*/, "single"],
    }
};