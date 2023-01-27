// Day 2: Loops
function vowelsAndConsonants(s) {
  let arr;
  let arr2;
  let arr3;
  const str = "aeiou";
  arr2 = s.split("").filter((el) => !str.includes(el));
  arr = s.split("").filter((el) => str.includes(el));
  arr3 = arr.concat(arr2);
  for (let i = 0; i < arr3.length; i++) {
    console.log(String(arr3[i]));
  }
}
