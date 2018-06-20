const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: ''
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
					},
				]
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                //set limit of files to 8000 bytes beyond wich file will be saved to folder and will be linked
                loader:'url-loader?limit=8000&name=images/[name].[ext]'
            }
		]
	}
};
