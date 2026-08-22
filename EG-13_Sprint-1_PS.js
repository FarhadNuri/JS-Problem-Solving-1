function isLeapYear(year) {
    let bool_year = false;
    if (year % 400 === 0) {
        bool_year = true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        bool_year = true;
    }
    return bool_year;
}

function generateFibonacci(n) {
    let fib = [];
    if (n >= 1) fib.push(0);
    if (n >= 2) fib.push(1);
    for (let i = 2; i < n; i++) {
        let sum = fib[i - 1] + fib[i - 2];
        fib.push(sum);
    }
    return fib;
}

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function findMedian(nums) {
    nums.sort((a, b) => a - b);
    let mid = Math.floor(nums.length / 2);
    if (nums.length % 2 !== 0) {
        return nums[mid];
    } else {
        return (nums[mid - 1] + nums[mid]) / 2;
    }
}

function findSecondLargest(nums) {
    let unique = [...new Set(nums)];
    if (unique.length < 2) {
        return null;
    }
    unique.sort((a, b) => b - a);
    return unique[1];
}

function findMode(arr) {
    let frequency = {};
    let mode = arr[0];
    let maxCount = 0;
    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;

        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mode = item;
        }
    }
    return mode;
}

function naturalSort(arr) {
    return arr.sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true })
    );
}