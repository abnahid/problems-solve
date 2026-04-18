# Problem Solve 1

A collection of 10 beginner-friendly JavaScript problem-solving functions.

## File

- [solution.js](solution.js) — all functions

## Functions

| # | Function | Description |
|---|----------|-------------|
| 1 | `reverseString(s)` | Returns the reverse of a string. |
| 2 | `fizzBuzz(n)` | Returns the FizzBuzz sequence from 1 to `n`. |
| 3 | `findMax(nums)` | Returns the largest number in an array. |
| 4 | `isPalindrome(s)` | Checks if a string is a palindrome (case/symbol-insensitive). |
| 5 | `sumArray(nums)` | Returns the sum of all numbers in an array. |
| 6 | `countVowels(s)` | Counts vowels (a, e, i, o, u) in a string. |
| 7 | `factorial(n)` | Returns the factorial of `n`. |
| 8 | `getEven(nums)` | Returns only the even numbers from an array. |
| 9 | `fibonacci(n)` | Returns the first `n` numbers of the Fibonacci sequence. |
| 10 | `findMin(nums)` | Returns the smallest number in an array. |

## Usage

```bash
node solution.js
```

Or import individual functions in another script:

```js
const { reverseString, fizzBuzz } = require('./solution.js');
```

## Examples

```js
reverseString("hello");        // "olleh"
fizzBuzz(5);                   // ["1","2","Fizz","4","Buzz"]
findMax([3, 7, 2, 9, 4]);      // 9
isPalindrome("A man a plan");  // false
sumArray([1, 2, 3, 4]);        // 10
countVowels("JavaScript");     // 3
factorial(5);                  // 120
getEven([1, 2, 3, 4, 5, 6]);   // [2, 4, 6]
fibonacci(6);                  // [0, 1, 1, 2, 3, 5]
findMin([3, 7, 2, 9, 4]);      // 2
```
