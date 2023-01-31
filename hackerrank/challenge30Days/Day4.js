// Day 4: Class vs. Instance
function Person(initialAge) {
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    age = 0;
  } else {
    age = initialAge;
  }
  this.amIOld = function () {
    if (age < 13) {
      console.log("You are young.");
    } else if (age >= 13 && age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function () {
    age++;
  };
}
