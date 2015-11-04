var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var depsTree = require("webpack-dependency-tree");
webpack(webpackConfig, function(err, stats){
	var stree = depsTree.treeToString(depsTree.fromStats(stats));
	console.log(stree);
});
