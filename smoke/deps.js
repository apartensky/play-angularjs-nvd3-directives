var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var depsTree = require("webpack-dependency-tree");
//console.log("depsTree", depsTree);
webpack(webpackConfig, function(err, stats){
		//console.log("stats", stats);
		var tree = depsTree.fromStats(stats);
		//console.log("tree", tree);
		var stree = depsTree.treeToString(tree);
		console.log(stree);
	});
