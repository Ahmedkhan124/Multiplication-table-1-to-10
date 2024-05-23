// 9 times table
// function to generate and print the multiplication table of 9
function generate_table_of_nine() {
    // the number we generate for multiplication table
    const multipier = 9;
    // an array representing the numbers 1 to 10
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // using a for...of loop to iterate over each number in the range array
    for (let num of range) {
        // printing the multiplication result to the console
        console.log(`${multipier} x ${num} =  ${multipier * num}`);
    }
}
generate_table_of_nine(); // call the function to generate and print the multiplication table.
export {};
