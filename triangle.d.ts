declare module 'triangle' {

  export {typeOfTriangle, validation}

  function typeOfTriangle (
    sideA: number,
    sideB: number,
    sideC: number
  ): {
    equilateral: boolean
    isosceles: boolean
    scalene: boolean
  }

  class validation {
    static triangleInequality (
      sideA: number,
      sideB: number,
      sideC: number
    ): any;
    static validTriangleSide(numberArg: number): any;
  }
}
