const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,  // Правило для обработки SVG-файлов
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,  // Файлы до 10 КБ будут инлайниться как Data URL
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Заменили contentBase на static
    },
    compress: true,
    port: 3000,
  },
  mode: 'development',
};

