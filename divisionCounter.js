//                        PROMPT

  // Write a function that, given two integers, counts the sum of the number of times each number can be evenly divided by two.

  // Example 1:
  // Given 2, 8:
  // 1) 2 -> 2/2 = 1 (total of 1 division)
  // 2) 8 -> 8/2 = 4, 4/2 = 2, 2/2 = 1 (total of 3 divisions)
  // 3) #1 + #2 = 4
  // So, total number of divisions by two is 4. Therefore, your function should return 4.

  // Example 2:
  // Given 1, 2:
  // 1) 1 -> 1/2 = .5 (total of Zero divisions, can't be divided by 2 evenly)
  // 2) 2 -> 2/2 = 1 (total of 1 division)
  // 3) #1 + #2 = 1
  // So, total number of divisions by two is 1. Therefore, your function should return 1.

  // Hints:
  // There are other use cases you might want to try in order to come up with your algorithm.
  // There's a specific operator that can help you count the divisions.
  // Is linear runtime complexity the fastest algorithm, or is there a faster way?



//                       SOLUTION #1:
let counter = 0;
const divisionCounter = (num1, num2) => {

  [num1,num2].forEach((num) => {

      if (num % 2 !== 0 || num === 0) {
        return 0;
      } else {
        counter++;
        divisionCounter(num/2);
      }
    });

    return counter;
};


//                     SOLUTION #2 (backup solution)
// const divisionCounter = (a, b) => {
//   let counter = 0;
// let num1 = a % 1 === 0 ? a : 0;
//  let num2 = b % 1 === 0 ? b : 0;
//   let num = num1 * num2 === 0 ? num1 + num2 : num1 * num2;
//   while (num % 2 === 0){
//     counter++;
//     num /= 2;
//   }
//   return counter;
// }


divisionCounter(2,8);
// divisionCounter(1,2);
// divisionCounter(-8, 2);
// divisionCounter(0,8);
// divisionCounter(13423, 6000);
// divisionCounter(-10, -18);
//divisionCounter(4.4, 10)

