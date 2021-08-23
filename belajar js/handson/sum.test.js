const Calculator = require("./Calculator");
test(" two numbers", () => {
   const calc = new Calculator();
   expect(calc.sum(3, 2)).toBe(5);
});
