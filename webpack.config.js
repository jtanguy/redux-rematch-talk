// webpack.config.js example
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'images'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30000,
            },
          },
        ],
      },
    ],
  },
};
