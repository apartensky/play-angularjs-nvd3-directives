define(["angular", "angularjs-nvd3-directives"], function(angular, nvd3){
	describe("WTF tests", function(){
		it("should smoke test true", function(){
				expect(true).toBe(true);
		});                
		it("should load angular", function(){
			expect(angular.module).toEqual(jasmine.any(Function));
		});
		it("should load nvd3", function(){
			console.debug("nvd3", nvd3);
			expect(nvd3).toBeDefined();
		});
		it("should find nvd3 directive", function(){			
			//expect(angular.injector().has("legendDirectives")).toBe(true);
			var ngvdMod = angular.module("legendDirectives");
			expect(ngvdMod).toBeDefined();
			expect(ngvdMod.name).toBe("legendDirectives");
		});
	});
});

