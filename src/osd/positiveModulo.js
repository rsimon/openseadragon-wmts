/**
 * Compute the modulo of a number but makes sure to always return
 * a positive value.
 * @param {Number} number the number to computes the modulo of
 * @param {Number} modulo the modulo
 * @returns {Number} the result of the modulo of number
 */
 const positiveModulo = function(number, modulo) {
  var result = number % modulo;
  if (result < 0) {
      result += modulo;
  }
  return result;
}

export default positiveModulo;