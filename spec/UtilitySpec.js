describe("general purpose utility functions", function(){
	describe("fullName()", function() {
		it("concatenates two name parts, separated by a space", function(){
			expect(fullName("Tyler", "Stanish")).toEqual("Tyler Stanish");
		});
	});
});
