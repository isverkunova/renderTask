const path = require("path");

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: "./src/App.jsx",
  //devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "app.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
