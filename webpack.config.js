const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const buildDirPath = path.resolve(__dirname, "build");

module.exports = {
  entry: {
    app: "./src/index.ts",
    web: "./src/webAR.ts",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: buildDirPath,
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/manifest.json", to: buildDirPath },
        { from: "./src/icon/", to: path.resolve(buildDirPath, "icon") },
      ],
    }),
  ],
};
