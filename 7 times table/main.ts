// 7 times table

// function to print 7 times table
function multiplier(): void {
    let table = 7;

    // loop through the number 1 to 10:
    for(let i = 1; i <= 10; i ++){
        console.log(table + " " + "x" + " "+ i + " " + "="  + " " + table * i);
    }
}
multiplier(); // calling the function
