var angular = require("angular");
//var d3 = require("d3");
//var nvd3 = require("nvd3");
var ngnvd3 = require("angularjs-nvd3-directives");
//define(["angular", "angularjs-nvd3-directives", "nvd3", "d3"], function(angular, ngnvd3, nvd3, d3){
	describe("WTF tests", function(){
		it("should smoke test true", function(){
				expect(true).toBe(true);
		});                
		it("should load angular", function(){
			expect(angular.module).toEqual(jasmine.any(Function));
		});
		it("should load ngnvd3", function(){
			console.debug("ngnvd3", ngnvd3);
			expect(ngnvd3).toBeDefined();
		});
		//it("should load nvd3", function(){
			//console.debug("nvd3", nvd3);
			//expect(nvd3).toBeDefined();
			//expect(nvd3.render).toEqual(jasmine.any(Function));
		//});
		//it("should load d3", function(){
			//console.debug("d3", d3);
			//expect(d3).toBeDefined();
			//expect(d3.select).toEqual(jasmine.any(Function));
		//});
		it("should find nvd3 directive", function(){			
			//expect(angular.injector().has("legendDirectives")).toBe(true);
			var ngvdMod = angular.module("legendDirectives");
			expect(ngvdMod).toBeDefined();
			expect(ngvdMod.name).toBe("legendDirectives");
		});
	});
//});

