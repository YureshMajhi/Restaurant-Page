const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },

  // loaders
  module: {
    rules: [
      // css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      // images
      { test: /\.(svg|ico|png|jpg|jpeg|gif|webp)$/i, type: "asset/resource" },

      // js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Puchi Restaurant",
      filename: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
  ],
};
