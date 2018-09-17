const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  /**
   * Inform webpack that this bundle
   * is for use with Node rather than the
   * browser
   */
  target: "node",

  /**
   * The root file of our server
   * application
   */
  entry: "./server/src/Index.tsx",

  /**
   * Transform our typescript into
   * regular javascript
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.tsx/,
        loader: [
          "babel-loader",
          "awesome-typescript-loader?configFileName=tsconfig.server.json"
        ]
      }
    ]
  },
  /**
   * Where the output bundle should
   * be placed
   */
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "/server/build")
  },

  /**
   * Watching for server changes
   */
  plugins: [new NodemonPlugin()]
};
