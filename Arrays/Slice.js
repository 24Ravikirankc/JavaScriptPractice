const nums = [2, -3, 4, 6, -1, 9, -7];

const res = nums.slice(3);
console.log(res);

const res2 = nums.slice(2, 4);
console.log(res2);

const res3 = nums.slice(0, 4);
console.log(res3);

const res4 = nums.reduce((product, next) => product * next);

console.log(res4);