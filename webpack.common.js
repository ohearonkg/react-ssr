module.exports = {
  entry: {
    app: "./client/src/index.tsx"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ["awesome-typescript-loader"]
      }
    ]
  },
  output: {
    filename: "client.bundle.js"
  }
};
