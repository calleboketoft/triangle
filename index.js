'use strict'

// export the validation functions and errors to be available to, for example,
// client validation logics
let validation = require('./validation')
module.exports.validation = validation
module.exports.errors = require('./errors')

// main function of the lib
module.exports.typeOfTriangle = function typeOfTriangle (sideA, sideB, sideC) {
  let inputResult = validation.validateArgs(...arguments)
  if (inputResult instanceof Error) {
    throw inputResult
  } else {
    // NOTE wrapping comparisons in parentheses for readability
    return {
      // Equilateral: all three sides are equally long
      equilateral: (sideA === sideB) && (sideA === sideC) && (sideB === sideC),
      // Isosceles: at least two sides equally long
      isosceles: (sideA === sideB) || (sideA === sideC) || (sideB === sideC),
      // Scalene: no sides equally long
      scalene: (sideA !== sideB) && (sideA !== sideC) && (sideB !== sideC)
    }
  }
}
