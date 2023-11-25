// --- def imp
// 1
// ESM import sum from './math.js'
// const sum = require('./math');
// console.log(sum(1, 4));

// --- named imp
// 2.1
// ESM import * as Math from './math.js'
// const Math = require('./math.js');
// console.log(Math.sum(1, 10));

// 2.2 ESM import {sum, mult} from './math.js'
const { sum, mult } = require('./math.js');
console.log('mult(5,10) :>> ', mult(5, 10));
