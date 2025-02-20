// Q1)   *
//      * *
//     * * *
//    * * * *
//   * * * * *

const rowCount = 5;
for (let i = 1; i <= rowCount; i++) {
    let line = "";
    for (let j = 1; j <= rowCount; j++) {
        if (i + j > rowCount) {
            line += "* ";
        } else {
            line += " ";
        }
    }
    console.log(line);
}

// Another method
const rows = 5;
for (let i = 1; i <= rows; i++) {
    const str = " ".repeat(rows - i) + "* ".repeat(i);
    console.log(str);
}

// Q2) ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.

const items = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
items.map(item => {
    switch (typeof item) {
        case 'string':
            console.log('String: ' + item);
            break;
        case 'number':
            console.log('Number: ' + item);
            break;
        default:
            console.log('Other: ' + item);
    }
});

// Q3)[1, 2, 3, 4, 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

let numbers = [1, 2, 3, 4, 5, 6];
const deleteIndex = (array) => {
    return (indices) => {
        indices.sort((a, b) => b - a);
        indices.forEach(idx => {
            if (idx >= 0 && idx < array.length) {
                array.splice(idx, 1);
            }
        });
        return array;
    };
};
const removeIndexes = deleteIndex(numbers);
console.log(removeIndexes([5, 2]));

// Q4) Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)

class ArrayPrinter {
    constructor(array) {
        this.array = array;
    }
    print() {
        this.array.forEach(element => console.log(element));
    }
}

const numArray = [1, 2, 3, 4, 5, 6];
const printer = new ArrayPrinter(numArray);
printer.print();

// Q5)Create a self-invoking function to console you name.

(function () {
    console.log("Gokul Ram T");
})();
