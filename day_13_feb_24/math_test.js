import addition, { mul } from './math.js';
import { pick } from './object_util.js'

console.log('I am Math Test File')
addition(10, 20);
mul(10, 20);

let myObj = { a: 10, b: 20, c: 30, d: 40, e: 50, f: 60 }
console.log(pick(myObj, ['a', 'c', 'e']));