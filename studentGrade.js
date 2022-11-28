//Challenge 1: Student Grade Generator (Toy Problem)
//At first we prompt the student marks
let marks = prompt("Enter Student Marks");
//the marks between 79 to 100 by using if statement we console.log("A")
if (marks > 79 && marks <=100){
    console.log("A");
}
//else if the marks is less than between 79 and 60;we console.log grade "B";
else if(marks >= 60 && marks <=79){
    console.log("B");
}
//else if the marks is in between 49 and 59;we console.log("C")
else if (marks >= 49 && marks <= 59){
   console.log("C");
}
// else if the marks is between 40 and 49;we console.log"D"
else if (marks >= 40 && marks <=49){
    console.log("D")
}
//else if the marks is less than 40 percent we console.log"E
else if (marks >=0 && marks < 40) {
    console.log("E")
  }
