const player1 = {
    A: 'rock', // 1pkt
    B: 'paper', // 2 pkt
    C: 'scissors' // 3 pkt
};

const player2 = {
    X: 'rock', // 1 pkt
    Y: 'paper', // 2 pkt
    Z: 'scissors' // 3 pkt
};

const {readFile} = require('fs');

readFile('./input.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    const transformData = '[' + data.replace(/\n/g, '];[').replace(/\s/g, ',') + ']';
    const dataArr = transformData.split(';');
    
    let score = 0;
    const win = 6;
    const draw = 3;
    const lost = 0;
    const X = 1;
    const Y = 2;
    const Z = 3;

    for (i = 0; i <= dataArr.length; i++) {

        if (dataArr[i] === '[A,X]') { // remis kamieni, kamien 1 pkt, remis 3
            score = score + X + draw;
        } else if (dataArr[i] === '[B,Y]') { // remis papieru, papier 2 pkt, remis 3
            score = score + Y + draw;
        } else if (dataArr[i] === '[C,Z]') { // remis nozyc, nozyce 3 pkt, remis 3
            score = score + Z + draw;
        } else if (dataArr[i] === '[A,Y]') { // kamien i papier 2 pkt , wygrana 6 pkt
            score = score + Y + win;
        } else if (dataArr[i] === '[A,Z]') { // kamien i nozyce 3 pkt , przegrana 0 pkt
            score = score + Z + lost;
        } else if (dataArr[i] === '[B,X]') { // papier i kamien 1 pkt, przegrana 0 pkt
            score = score + X + lost;
        } else if (dataArr[i] === '[B,Z]') { // papier i mozyce 3 pkt, wygrana 6 pkt
            score = score + Z + win;
        } else if (dataArr[i] === '[C,X]') { // nozyce i kamien 1 pkt, wygrana 6 pkt
            score = score + X + win;
        } else if (dataArr[i] === '[C,Y]') { // nozyce i papier 2 pkt, przegrana 0 pkt
            score = score + Y + lost;
        };

    };
    console.log(score)
    
}
)
    
    
    
    
    
    
    
    
    
    


