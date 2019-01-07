
module.exports = {

  target: 'node',

  context: __dirname,
  devtool: 'source-map',
  entry: './src/app.js',
  output: {
    path: `${__dirname}/src/dist`,
    filename: 'bundle.js'
  }

};
