const Converter = require("./Converter");

// test toFahrenheit
test("reamur to fahrenheit", () => {
   const trans = new Converter();
   expect(trans.toFahrenheit("reamur", 20)).toBe(77);
});

test("celcius to fahrenheit", () => {
   const trans = new Converter();
   expect(trans.toFahrenheit("celcius", 25)).toBe(77);
});
