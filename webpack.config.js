const path = require("path");
const HTMLwebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./client/src/start.js",

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [new HTMLwebpackPlugin({ template: "./client/src/index.html" })],
    devServer: {
        static: path.join(__dirname, "public"),
        proxy: {
            "/": {
                target: "http://localhost:3001",
            },
        },
        port: "3000",
    },

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
