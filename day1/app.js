const { readFile } = require('fs');

readFile('./input.txt', 'utf-8', (err, data) => {
    if(err) {
        throw new Error(err);
    }
    const transformData = '[' + data.replace(/\s/g, ',, ');
    const dataArr = transformData.split(',, ,, ');
    console.log(dataArr)
});

