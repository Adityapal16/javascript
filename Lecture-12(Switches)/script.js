// switch = can be an efficent replacement to many else if statmets
// switch is faster than if else chain because it is a jump table

// let day = window.prompt("Enter a number between 1 and 7");
// day = Number(day);
// switch (day) {
//   case 1:
//     console.log("it is Monday");
//     break;
//   case 2:
//     consle.log("it is tuesday");
//     break;
//   case 3:
//     console.log("it is Wednesday");
//     break;
//   case 4:
//     console.log("it is Thursday");
//     break;
//   case 5:
//     console.log("it is Friday");
//     break;
//   case 6:
//     console.log("it is Saturday");
//     break;
//   case 7:
//     console.log("it is sunday");
//     break;
//   default:
//     console.log(`${day} id not a valid day`);
// }

document.getElementById("button").onclick = function () {
    let marks = document.getElementById("marks").value;
    marks = Number(marks); // Convert the input to a number
    const gradeElement = document.getElementById("grade");
    let grade;
  
    switch (true) {
      case marks >= 90 && marks <= 100:
        grade = "A";
        break;
      case marks >= 80 && marks <= 89:
        grade = "B";
        break;
      case marks >= 70 && marks <= 79:
        grade = "C";
        break;
      case marks >= 60 && marks <= 69:
        grade = "D";
        break;
      case marks >= 0 && marks <= 59:
        grade = "F";
        break;
      default:
        grade = "Invalid Marks";
        break;
    }
  
    // Update the displayed grade
    gradeElement.textContent = grade;
  };
  