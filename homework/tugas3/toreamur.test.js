const Converter = require("./Converter");

// test toReamur
test("celcius to reamur", () => {
   const trans = new Converter();
   expect(trans.toReamur("celcius", 30)).toBe(24);
});

test("fahrenheit to reamur", () => {
   const trans = new Converter();
   expect(trans.toReamur("fahrenheit", 77)).toBe(20);
});
