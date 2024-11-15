let words = [];
words.push("pen");
words.push("pencil", "knife", "chair");

console.log(words);


const lastelement = words.pop();
console.log(lastelement);
console.log(words);

const lastelement1 = words.pop();
console.log(lastelement1);
console.log(words);

//Output
// [ 'pen', 'pencil', 'knife', 'chair' ]
// chair
// [ 'pen', 'pencil', 'knife' ]
// knife
// [ 'pen', 'pencil' ]

