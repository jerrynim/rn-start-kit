module.exports = {
    root: true,
    extends: "@react-native-community",
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],

    rules: {
        quotes: ["error", "double"],
        indent: ["error", 4, { SwitchCase: 1 }],
        "require-jsdoc": 0,
        "no-unused-vars": [
            "warn",
            { varsIgnorePattern: "HTMLElementTagNameMap" },
        ],
        "quote-props": 0,
        "object-curly-spacing": 0,
        "spaced-comment": 0,
        "max-len": 0,
        "space-before-function-paren": 0,
    },
};
