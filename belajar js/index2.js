let arr = ["I", "student", "js", "right", "now"];
arr.splice(0, 4, "lets", "dance");
let taken = arr.splice(0, 4);

console.log(arr);
console.log(taken);
const user = {
   name: "john",
   age: 30,
};

const listOfnames = ["david", "joe", "maria", "glaive", "lulu"];

let a = 0;
while (a < listOfnames.length) {
   console.log(listOfnames[a]);
   a++;
}
