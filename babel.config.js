module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./"],
                alias: {},
            },
        ],
        ["react-native-reanimated/plugin"],
        ["inline-dotenv", { path: ".env" }],
        [
            "babel-plugin-inline-import",
            {
                extensions: [".svg"],
            },
        ],
    ],
};
