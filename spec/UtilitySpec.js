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
		// beforeEach(() => {
		// 	spyOn(Date, "now").and.returnValue(new Date "2018-06-14"));
		 //});
		it("returns true when age is 21", () => {
			spyOn(Date, "now").and.returnValue(new Date("2018-06-14"));
			expect(isOver21("1997-06-13")).toBe(true);
		});
		it("returns true when age is 21", () => {
			expect(isOver21("1991-10-23")).toBe(true);
		});
		it("returns true when age is 21", () => {
			expect(isOver21("2000-01-31")).toBe(false);
		});
	});

	describe("isLeapYear()", () => {
		//when the year is evenly divisible by 4, it returns TRUE
		// ( e.g. isLeapYear(2000) )
		it("returns true when year is evenly divisible by 4", () => {
			expect(isLeapYear(2000)).toBe(true);
		});
		//when the year is not evenly divisible by 4, it returns FALSE
		// ( e.g. isLeapYear(1999) )
		it("returns false when year is NOT evenly divisible by 4", () => {
			expect(isLeapYear(1999)).toBe(false);
		});
 	});
});
