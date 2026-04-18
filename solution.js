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


