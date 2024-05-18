/**
 * Function to process an array of numbers.
 * - Even numbers are squared.
 * - Odd numbers are tripled.
 * @param {number[]} arr 
 * @returns {number[]}
 */
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * 2;
        } else {
            return num * 3;
        }
    });
}

/**
 * @param {string[]} stringAr
 * @param {number[]} numArr
 * @returns {string[]} 
 */
function formatArrayStrings(stringAr, numArr) {
    return stringAr.map((str, index) => {
        const num = numArr[index];
        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}