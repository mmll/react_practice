// hello world const path = require('path');

module.exports = {
	context: __dirname + '/app',

	entry: {
		app: "./js/app.js",
		index: './index.html'

	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},

	resolve: {
		extensions: ['.js', '*', '.jsx', '.json']
			//root: path.resolve(__dirname,'./app/js'),
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot-loader', 'babel-loader']
		}, {
			test: /\.html$/,
			loader: "file-loader?name=[name].[ext]",
		}, {
			test: /\.scss$/,
			loader: 'style!css!sass'
		},{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]

	}
};
