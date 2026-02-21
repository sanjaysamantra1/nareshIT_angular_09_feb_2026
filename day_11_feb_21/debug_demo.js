console.log('Global Code starts...');

var a = 10;
let b = 20;
const c = 30;

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);

function f2() {
   console.log('f2 starts...')
   console.log('f2 ends...')
}
function f1() {
   console.log('f1 starts...')
   f2();
   console.log('f1 ends...')
}
f1();

let name = 'nareshIT'
console.log(name);

console.log('Global Code Ends...');
