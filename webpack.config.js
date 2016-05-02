var path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

// Comments in exports are for production compression
module.exports = {
	/*devtool: 'cheap-module-source-map',*/
	devtool: 'eval',
	entry: path.resolve(__dirname, 'app/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	node: {
		fs: 'empty'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
			},
			{
				test: /\.png$/,
				loader: 'url-loader?mimetype=image/png'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('./[name].css'),
		new webpack.optimize.CommonsChunkPlugin('shared.js'),
		new webpack.DefinePlugin({
			'process.env': {
				/*'NODE_ENV': JSON.stringify('production')*/
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
			}
		})
	]
};
