const { readFile } = require("fs");

let stack1 = ['R', 'C', 'H'];
let stack2 = ['F', 'S', 'L', 'H', 'J', 'B'];
let stack3 = ['Q', 'T', 'J', 'H', 'D', 'M', 'R'];
let stack4 = ['J', 'B', 'Z', 'H', 'R', 'G', 'S'];
let stack5 = ['B', 'C', 'D', 'T', 'Z', 'F', 'P', 'R'];
let stack6 = ['G', 'C', 'H', 'T'];
let stack7 = ['L', 'W', 'P', 'B', 'Z', 'V', 'N', 'S'];
let stack8 = ['C', 'G', 'Q', 'J', 'R'];
let stack9 = ['S', 'F', 'P', 'H', 'R', 'T', 'D', 'L'];

let stack = [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9];

readFile('./input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const dataArr = data
    .replace(/ from /g, ',')
    .replace(/ to /g, ',')
    .replace(/\n/g, '').split('move ');


  for (i = 0; i <= dataArr.length; i++) {
    for (k = 0; k <= dataArr[i].length; k++) {
      dataArr[i].push
    }
  }
  
  console.log(stack);


})
