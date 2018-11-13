const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './public/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env']
				}
			}
		]
	},
	mode: 'production'
}