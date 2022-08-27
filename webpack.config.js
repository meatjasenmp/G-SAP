const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const path = require("path");

const jsPath = "./src";
const outPutPath = "dist";
const localDomain = "http://gsap.local";

const entryPoints = {
  app: `${jsPath}/app.js`,
};

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, outPutPath),
    filename: "gsap.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "gsap.css",
    }),
    new BrowserSyncPlugin({
      proxy: localDomain,
      files: [outPutPath + "/*.css", "./*.php", "**/*.php"],
      injectCss: true,
      reload: false,
      open: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/i,
        use: "url-loader?limit=1024",
      },
    ],
  },
};
