// while e do while

// let controlo = 0;

// while (controlo <= 10) {
//     console.log(controlo);
//     controlo++;
// }


// do {
//     console.log(controlo);
//     controlo++;
// } while (controlo <= 10)


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(1, 50);


// while (rand !== 10) {
//     rand = random(min, max);
//     console.log(rand);
// }

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);