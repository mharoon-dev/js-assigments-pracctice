// QUESTION 01 & 02

let marksMass = 78
let marksHeight = 1.69
function marksBMI() {
    var calculation = marksMass / marksHeight ** 2
    return calculation
}  
console.log("mark'sBMI = " + marksBMI())


let johnsMass = 92
let johnsHeight = 1.95
function johnsBMI() {
    var calculation = johnsMass / johnsHeight ** 2
    return calculation
} 
console.log("john'sBMI = " + johnsBMI())


if (marksBMI > johnsBMI ) {
    console.log("mark's BMI is higher then john's BMI " + marksBMI())
} else {
    console.log("john's BMI is higher then mark's BMI " + johnsBMI())

}

// question 03
let dolphins = {
    round1:96,
    round2:108,
    round3:89
}
function dolphinsCalculate() {
    var Calculate = dolphins.round1 + dolphins.round2 + dolphins.round3
    return Calculate
} 
console.log("dolphins-Score-average = " + dolphinsCalculate())


let Koalas = {
    round1:88,
    round2:91,
    round3:110
}
function KoalasCalculate() {
    var Calculate = Koalas.round1 + Koalas.round2 + Koalas.round3
    return Calculate
} 
console.log("Koalas-Score-average = " + KoalasCalculate())

if (dolphinsCalculate > KoalasCalculate) {
    console.log("the winner is dolphins")
} else if (dolphinsCalculate == KoalasCalculate) {
    console.log("the match is draw")
} else {
    console.log("the winner is koalas")
}

// question 04 
let bill = 295
let tip = bill >= 50 && bill <= 300 ? bill / 100 * 15 : bill / 100 * 20

let total = bill + tip
console.log("bill = " + bill)
console.log("tip = " + tip)
console.log("total = " + total)
