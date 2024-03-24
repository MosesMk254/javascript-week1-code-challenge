// stusent grade generator
// for obtaining grades depending on the marks a student gets

// assigning an empty variable called marks that will be passed inside the function to check grade and passed in a value
let marks;
// creating a function to check if the marks meet a certain condition and they are assigned a grade according to the condition they meet
function gradeOutput() {
  let grade; //assigning an empty grade variable that will be passed in our if else statement
  // the if else statemet to check for our marks and grades
  if (marks > 79) {
    console.log((grade = "A"));
  } else if (marks >= 60 && marks <= 79) {
    console.log((grade = "B"));
  } else if (marks >= 49 && marks <= 59) {
    console.log((grade = "C"));
  } else if (marks >= 40 && marks < 49) {
    console.log((grade = "D"));
  } else {
    console.log((grade = "E"));
  }
  return grade; //returning the grade value after checking for all the conditions
}
gradeOutput((marks = 56));
