const pkg = require("./package.json");

module.exports = {
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