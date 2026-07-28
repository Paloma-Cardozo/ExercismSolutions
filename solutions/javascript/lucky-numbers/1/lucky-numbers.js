// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const parameter1 = array1.join('');
  const parameter2 = array2.join('');
  
  return Number(parameter1) + Number(parameter2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const string = String(value).split('').reverse().join('');

  return String(value) === string;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input) {return 'Required field'}

  const number = Number(input);
  
  if(!number) {return 'Must be a number besides 0'}

  return '';
}
