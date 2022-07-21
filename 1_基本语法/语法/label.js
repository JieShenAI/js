function breakDoubleFor() {
    top:
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i === 1 && j === 1) break top;
            console.log('i=' + i + ', j=' + j);
        }
    }
    console.log(i + " " + j);
}


// breakDoubleFor()

function jumpCode(n) {
    door1:
    {
        if (n === 1) {
            break door1;
        }
        console.log("door1 not jump!");
    }
    door2:
    {
        if (n === 2) {
            break door2;
        }
        console.log("door2 not jump!");
    }
}

jumpCode(1)