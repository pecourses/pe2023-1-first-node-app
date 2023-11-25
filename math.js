// --- def exp
const sum = (a, b) => a + b;

// 1
// ESM export default sum
// module.exports = sum;

const mult = (a, b) => a * b;

// --- named exp

// 2.a
// ESM export { sum, mult }
// module.exports = { sum, mult };

// 2.b
// ESM export const sum = (a, b) => a + b
module.exports.sum = (a, b) => a + b;
module.exports.mult = (a, b) => a * b;
