const { DefinePlugin } = require("webpack");

module.exports = {
    plugins: [
        new DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify('production') }
      })
    ]
}