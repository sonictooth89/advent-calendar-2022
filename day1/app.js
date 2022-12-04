let {txt} = require('./input');


txt = txt.replace(/\n/g,","); // replace enter on comma
txt = txt.replace(/,,/g, "], [");
txt = `[[${txt}]]`;
let obj = JSON.parse(txt); // [ [number],[number],[number] ]

const propertyValues = Object.values(obj); // [ [],[],[] ]

    const sumArr = map.propertyValues( item => {
        item.reduce((a, b) => {
            return a + b;
        }, 0)
    });



console.log(sumArr)


// for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       console.log(key); 
//       console.log(obj[key]); 
//     }
//   };

// const arrValues = Object.values(obj);


// console.log(typeof(arrValues[0][0]))

