const { readFile } = require('fs');

readFile('./input.txt', 'utf-8', (err, data) => {
    if(err) {
        throw new Error(err);
    }
    const transformData = data.split("\n\n").map((row) => row.split("\n").map((value) => parseInt(value)));

    let arrayOfSum = []; //tablica sum

    for (let i = 0; i < transformData.length; i++) {
        arrayOfSum.push(
            transformData[i].reduce((prev, curr) => prev + curr)
        );
    };

    const max = Math.max.apply(null, arrayOfSum);
    console.log(`The most calories for Elf is: ${max}`);

});
