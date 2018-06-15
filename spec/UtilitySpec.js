describe("general purpose utility functions", function(){
	describe("fullName()", function() {
		it("concatenates two name parts, separated by a space", function(){
			expect(fullName("Tyler", "Stanish")).toEqual("Tyler Stanish");
		});
	});
	describe("ageInYears()", function() {
		it("returns age for a birthday string", function(){
			expect(ageInYears("1980-06-01")).toEqual(38);
		});
	});
});
