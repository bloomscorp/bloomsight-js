const mode = "production";
const pkg = require("./package.json");

module.exports = {
    // mode defaults to 'production' if not set
    mode: mode,
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {"timers": require.resolve("timers-browserify")}
    },
    // required if using webpack-dev-server
    devServer: {
        contentBase: "./dist",
    },
    output: {
        filename: `bloomsight@${pkg.version}.js`
    }
};