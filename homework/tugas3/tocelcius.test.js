const Converter = require("./Converter");

// test toCelcius
test("reamur to celcius", () => {
   const trans = new Converter();
   expect(trans.toCelcius("reamur", 24)).toBe(30);
});

test("fahrenheit to celcius", () => {
   const trans = new Converter();
   expect(trans.toCelcius("fahrenheit", 77)).toBe(25);
});
