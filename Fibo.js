//A person saves his monthly saving according to given schema.
// He saves same amount of money which is equal to the money saved in immediate previous two months. 
//Assume, initially he saved 1000 rupees and in first month he saved another 1000. 
//Your task is to tell how much he had totally saved at the end of ‘n’ months
// Getting input via STDIN
const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
 
 
  var n = parseInt(userInput[0]);

function fib(n) {
  if (n === 1) {
    return 2000; // (0+1000)+1000
  } else if (n === 2) {
    return 4000; // (1000 + 2000)+1000
  } else {
    return fib(n - 1) + fib(n - 2) + 1000; // He saves same amount of money = the money saved in immediate previous two months +1000   
  }
}

console.log(fib(n));
 
 
  //end-here
});
