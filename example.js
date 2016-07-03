'use strict'
let typeOfTriangle = require('./index')
let argv = require('minimist')(process.argv.slice(2))

console.log(typeOfTriangle(argv.a, argv.b, argv.c))