// 10 times table

// creat an object to hold the table of 10
const tableOfTen: {[key: number]: number} = {}

// populate the table of 10
for (let i = 1; i <= 10; i++){
     tableOfTen[i] = 10 * i
}
// Iterate over the keys of the table of 10
for (let key in tableOfTen) {
    console.log(`10 x ${key} = ${tableOfTen[key]}`);
}
