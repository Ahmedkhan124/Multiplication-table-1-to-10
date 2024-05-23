// 4 times table
// function with parameter to print a four times table 
function printingTable(multiply, range) {
    for (let i = 1; i <= range; i++) {
        console.log(`${multiply} x ${i} = ${multiply * i}`);
    }
}
printingTable(4, 10); // calling the function
export {};
