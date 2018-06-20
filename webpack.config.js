const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: './src/index.js',
	output: {
		path: '',
		filename: 'bundle.js',
		publicPath: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [ 'js', 'jsx' ]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				//use is used for combining multiple loaders. loaders is used for defining straight forward loader names
				//use parses loaders from right to left ie bottom to top
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								autoprefixer({
									browsers: [ '> 1%', 'last 2 versions' ]
								})
							]
						}
					}
				]
			}
		]
	}
};
