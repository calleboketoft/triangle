'use strict'
let validateArgs = require('./validate-input').validateArgs

module.exports = function typeOfTriangle (sideA, sideB, sideC) {
  let inputResult = validateArgs(...arguments)
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
