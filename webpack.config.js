const path = require("path");
const webpack = require("webpack");

const isServer = (process.env.BUILD_TARGET || "client") === "server";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isServer ? "index.server.js" : "index.js",
    libraryTarget: "commonjs2",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "commonjs react",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
  },
  target: isServer ? "node" : "web",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_TARGET": JSON.stringify(process.env.BUILD_TARGET),
    }),
  ],
};
