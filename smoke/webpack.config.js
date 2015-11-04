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
        //*** This is needed if Bower's main attribute is an array
        //*** Not needed if using the Npm version
        alias: {
            "nvd3$": "nvd3/nv.d3.js",
        }     
    },
	//externals: [{		
	//	angular: "angular",
	//	lodash: "lodash"
	//}, 
	// /^[a-z\-0-9]+$/],
	module: {
        loaders: [
           //{ test: /bower_components\/angularjs-nvd3-directives\/dist\/.*\.js/, loader: 'imports?angualr=angular' },
           { test: /\/nv\.d3\.js/, loader: 'exports?window.nv' }
        ]
    },
    devtool: "source-map",
    plugins: [
		//new BowerWebpackPlugin({
		//	modulesDirectories: ["bower_components"],
		//	manifestFiles:      "bower.json",
		//	includes:           undefined,
		//	excludes:           /\/angular\//,
		//	searchResolveModulesDirectories: false
		//})
		new webpack.ProvidePlugin({
			//"nv": "nvd3",
			//nvd3 expects d3 to be a global, D3 exports itself both as AMD and CJM 
			//and it works in the browser, but Karma tests fail to find it and nvd3 breaks
			"d3": "d3"
		}),
		new webpack.ResolverPlugin([
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"]),
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ], ["normal", "loader"]),
    ]
};
