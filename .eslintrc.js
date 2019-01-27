module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "airbnb", "prettier"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "jsx-a11y", "import"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "import/core-modules": "prop-types",
        "import/no-extraneous-dependencies": [
          "error", {
            "devDependencies": true
          }
        ],
        "react/jsx-filename-extension": [
          1, { "extensions": [".js", ".jsx"] }
        ]
    }
}
