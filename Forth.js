// // Delete the repeating letter from the array
// // Getting input via STDIN
// const readline = require("readline");
// const inp = readline.createInterface({
//   input: process.stdin
// });
// const userInput = [];
// inp.on("line", (data) => {
//   userInput.push(data);
// });
// inp.on("close", () => {
//   //start-here
//   //Your code goes here … replace the below line with your code logic
//   var str = userlnput[0] 
//   var res=""
//   for(var i=O;i<str.length;i++)
//   { var rep = false
//   for(var j =0 ; j <str.length; j++)
//   {
//   ifU!=i&&str[i]= =strLi)
//   { rep=true
//   break
  
//   if(!rep){
//   res+ =str[i]
  
//   console.log(res)
  
 
 
 
 
//   //end-here
// });

// Delete the repeating letters from the array
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
  // Start here
  // Your code goes here … replace the below line with your code logic
  var str = userInput[0]; // Corrected variable name from userlnput to userInput
  var res = "";
  
  for (var i = 0; i < str.length; i++) { // Changed O to 0 (zero)
    var rep = false;
    
    for (var j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) { // Corrected syntax errors in the condition
        rep = true;
        break;
      }
    }
    
    if (!rep) {
      res += str[i]; // Fixed syntax error: changed += to +=
    }
  }
  
  console.log(res); // Moved console.log outside of the loop to avoid multiple prints
  // End here
});
