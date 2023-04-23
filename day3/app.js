const { readFile } = require("fs");

readFile("./input.txt", "utf-8", (err, data) => {
    if (err) {
        throw new Error(err);
    }
    const transformData = data.split("\n");

    let newArr = [];

    // make new array with rows from text input
    for (let i = 0; i < transformData.length; i++) {
        let str = transformData[i];
        let firstHalf = str.substring(0, str.length / 2);
        let secondHalf = str.substring(str.length / 2);

        newArr.push([firstHalf, secondHalf]);
    }

    // make array with the same letters
    let singleLetterArray = [];
    for (let i = 0; i < newArr.length; i++) {
        let str1 = newArr[i][0];
        let str2 = newArr[i][1];
        let repeatedChar = null;

        for (let i = 0; i < str1.length; i++) {
            let char = str1[i];
            if (str2.indexOf(char) !== -1) {
                repeatedChar = char;
                singleLetterArray.push(repeatedChar);
                break;
            }
        }
    }
    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const alphabet2 = alphabet.map((el) => el.toLocaleUpperCase());

    let arrayOfNumbers = [];
    for (let i = 0; i <= 25; i++) {
        let value = singleLetterArray[i];
        let index = alphabet.indexOf(value) + 1;
        if (index !== -1) {
            arrayOfNumbers.push(index);
        }
    }
    for (let i = 0; i <= 25; i++) {
        let value = singleLetterArray[i];
        let index = alphabet2.indexOf(value) + 1;
        if (index !== -1) {
            arrayOfNumbers.push(index + 27);
        }
    }

    console.log(arrayOfNumbers);

    // changing letter in number: a - z priority 1 - 26, A - Z priority 27 - 52
});
