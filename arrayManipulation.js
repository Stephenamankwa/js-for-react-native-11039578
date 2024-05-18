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
