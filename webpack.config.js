const path = require("path");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: [
          '/node_module/'
        ],
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  output: {
    // This is required so workers are known where to be loaded from
    publicPath: "/",
    filename: "bundle.js",
    path: `${__dirname}/docs`,
  },
};