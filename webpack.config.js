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
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
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
