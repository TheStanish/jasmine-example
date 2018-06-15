describe("general purpose utility functions", () => {
	describe("fullName()", () => {
		it("concatenates two name parts, separated by a space", () => {
			expect(fullName("Tyler", "Stanish")).toEqual("Tyler Stanish");
		});
	});
	describe("ageInYears()", () => {
		it("returns age for a birthday string", () => {
			expect(ageInYears("1980-06-01")).toEqual(38);
		});
	});
	describe("isOver21()", () => {
		it("returns true when age is 21", () => {
			expect(isOver21("1997-06-14")).toBe(true);
		});
		it("returns true when age is 21", () => {
			expect(isOver21("1991-10-23")).toBe(true);
		});
		it("returns true when age is 21", () => {
			expect(isOver21("2000-01-31")).toBe(false);
		});
	});
});
