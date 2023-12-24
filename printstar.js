const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input number of rows : ", function(rows) {
  let spc = parseInt(rows) + 4 - 1;

  for (let i = 1; i <= parseInt(rows); i++) {
    for (let k = spc; k >= 1; k--) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
    spc--;
  }

  rl.close();
});

