// 1. Reverse a String 
function reverseString(s) {
    return s.split('').reverse().join('');
}

// 2. FizzBuzz
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i.toString());
    }

    return result;
}

// 3. Largest Number in Array

function findMax(nums) {
    let max = nums[0];

    for (let num of nums) {
        if (num > max) max = num;
    }

    return max;
}

// 4.  Check for Palindrome

function isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

// 5.  Sum of Array Elements

function sumArray(nums) {
    let sum = 0;

    for (let num of nums) {
        sum = sum + num;
    }

    return sum;
}

// 6. Count Vowels

function countVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let char of s.toLowerCase()) {
        if (vowels.has(char)) count++;
    }

    return count;
}

// 7.  Factorial Calculation

function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}

// 8.  Even or Odd List

function getEven(nums) {
    return nums.filter(n => n % 2 === 0);
}

// 9. Fibonacci Sequence

function fibonacci(n) {
    if (n === 1) return [0];

    const result = [0, 1];

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}

// 10.  Find the Minimum in an Array

function findMin(nums) {
    let min = nums[0];

    for (let num of nums) {
        if (num < min) min = num;
    }

    return min;
}