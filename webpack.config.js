var NAME = "ng-nvd3-smoke";
var webpack = require("webpack");
var path = require("path");
var BowerWebpackPlugin = require("bower-webpack-plugin");
module.exports = {
    entry: "./src/main/"+NAME+".js",
    output: {
    	path: "dist",
        filename: "index.js",
//        libraryTarget: "umd",
//		library: NAME,
		pathinfo: true,
    },
    resolve: {        		
        modulesDirectories: ['node_modules', 'bower_components'],        
    },
	//externals: [{		
	//	angular: "angular",
	//	lodash: "lodash"
	//}, 
	// /^[a-z\-0-9]+$/],
	//module: {
    //    loaders: [
    //       { test: /bower_components\/angularjs-nvd3-directives\/dist\/.*\.js/, loader: 'imports?angualr=angular' },
    //        ]
    //},
    devtool: "source-map",
    plugins: [
		//new BowerWebpackPlugin({
		//	modulesDirectories: ["bower_components"],
		//	manifestFiles:      "bower.json",
		//	includes:           undefined,
		//	excludes:           /\/angular\//,
		//	searchResolveModulesDirectories: false
		//})
		//new webpack.ProvidePlugin({
		//	"angular": "angular"
		//}),
		new webpack.ResolverPlugin([
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"]),
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ], ["normal", "loader"]),
    ]
};
