function romanNumeral(string) {
  const combos = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  let total = 0
  let index = 0

  while(index < string.length) {
    if(combos[string[index] + string[index + 1]]) {
      total += combos[string[index] + string[index + 1]]
      index += 2
    } else {
      total += combos[string[index]]
      index ++
    }
  }

  return total

}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// I would iterate through each of the letters in the string using for...of
// inside of this, there will be conditional statements for adding values
// there will also be nested conditionals to account for any -1 situations like IX
//   ie: if el === X and the element before it is an I, add 3 (instead of 5)

//alternatively, I could define the values and potential 2-letter combos before hand.
// I can loop through the string using a while loop the breaks after a counter is > the string length.
// I can check the string based on the index I am using and see if string[index] + string[index + 1] is equal to any of my pre-loaded combos.
//   if it is, I can add 2 to my counter,
//   if it isn't, I only add one
