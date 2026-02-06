const name = prompt("Enter your name ");
const age = parseInt(prompt("Enter your age "));
const marks = parseFloat(prompt("Enter your marks: "));

let totalmarks = 100;
let percentage = (marks / totalmarks) * 100;

let grade;
if (percentage >= 90 && percentage <= 100) {
    grade = "A+";
} else if (percentage >= 80 && percentage < 90) {
    grade = "A";
} else if (percentage >= 70 && percentage < 80) {
    grade = "B";
} else if (percentage >= 60 && percentage < 70) {
    grade = "C";
} else if (percentage >= 50 && percentage < 60) {
    grade = "D";
} else if (percentage >= 0 && percentage < 50) {
    grade = "F";
} else {
    console.log("Invalid marks entered.");
}

console.log("---------------");
console.log("Student Report");
console.log("---------------");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Marks: ${marks}`);
console.log(`Grade: ${grade}`);