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
    //console.log(newArr);

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
    //console.log(singleLetterArray);

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
    for (let i = 0; i < singleLetterArray.length; i++) {
        let letter = singleLetterArray[i];
        let index = alphabet.indexOf(letter) + 1;
        if (index != 0) {
            arrayOfNumbers.push(index);
        } else {
            let letter2 = singleLetterArray[i];
            let index2 = alphabet2.indexOf(letter2) + 27;
            arrayOfNumbers.push(index2);
        }
    }
    //console.log(arrayOfNumbers[300]);

    // sum of elements of arrayOfNumbers

    let sumOfElements = arrayOfNumbers.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    console.log(sumOfElements);
    //console.log(alphabet.indexOf("j") + 1);
    //console.log(alphabet2.indexOf("A") + 27);

    // changing letter in number: a - z priority 1 - 26, A - Z priority 27 - 52
});
