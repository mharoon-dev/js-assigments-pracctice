// question 01

// let dolphins = {
//     round1:44,
//     round2:23,
//     round3:71
// }
// let Koalas = {
//     round1:65,
//     round2:54,
//     round3:49
// }
// let dolphinsAve = Math.round(dolphins.round1 + dolphins.round2 + dolphins.round3 / 3);
// let KoalasAve = Math.round(Koalas.round1 + Koalas.round2 + Koalas.round3   / 3);

// function checkWinner(ave1,ave2) { 
//         console.log(`dolphins = ${ave1}`);
//         console.log(`Koalas = ${ave2}`);
//         let winner = ave1 > ave2 ? console.log("winner is dolphins") : console.log("winner is koalas")
// }
// checkWinner(dolphinsAve,KoalasAve)


// question 02
let bill1 = +prompt("write your bill1.");
let bill2 = +prompt("write your bill2.");
let bill3 = +prompt("write your bill3.");
let bill4 = +prompt("write your bill4.");
let tip = []
let bill = [
    bill1,
    bill2,
    bill3,
    bill4
]

function calculateTip() {
    for (i = 0; i < bill.length ; i++) {
        if (bill[i] >= 50 && bill[i] <= 300) {
            tip[i] = bill[i] / 100 * 15
        } else {
            tip[i] = bill[i] / 100 * 20
        }
    }
    let total = []
    for (i = 0; i < bill.length ; i++) {
        total[i] = bill[i] + tip[i] 
    }
    return total
}
console.log(calculateTip());
