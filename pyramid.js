const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printPyramid(n) {
  let i, j;
  let alph = 'A';
  let blk;
  let ctr = 1;

  for (i = 1; i <= n; i++) {
    for (blk = 1; blk <= n - i; blk++) {
      process.stdout.write('  ');
    }
    for (j = 0; j <= ctr / 2; j++) {
      process.stdout.write(alph + ' ');
      alph = String.fromCharCode(alph.charCodeAt(0) + 1);
    }
    alph = String.fromCharCode(alph.charCodeAt(0) - 2);
    for (j = 0; j < ctr / 2; j++) {
      process.stdout.write(alph + ' ');
      alph = String.fromCharCode(alph.charCodeAt(0) - 1);
    }
    ctr = ctr + 2;
    alph = 'A';
    process.stdout.write('\n');
  }
}

rl.question("Input the number of Letters (less than 26) in the Pyramid : ", function(n) {
  printPyramid(parseInt(n));
  rl.close();
});

