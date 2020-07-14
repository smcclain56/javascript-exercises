//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}
//SOLN:
var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// returns undefined

//#3 return value when moveCommand("back");
// returns "you arrived home"

//#4 return value when moveCommand("right");
// returns "you found a river"

//#5 return value when moveCommand("left");
// returns undefined

//BONUS: practice makes perfect. Go and write your own switch function
function dayOfTheWeek(day){
  var dayOfTheWeek;
  switch(day){
    case "Sunday" :
      dayOfTheWeek = "It is the first day of the week";
      break;
    case "Monday" :
      dayOfTheWeek = "It is the secibd day of the week";
      break;
    case "Tuesday" :
      dayOfTheWeek = "It is the third day of the week";
      break;
    case "Wednesday" :
      dayOfTheWeek = "It is the fourth day of the week";
      break;
    case "Thursday" :
      dayOfTheWeek = "It is the fifth day of the week";
      break;
    case "Friday" :
      dayOfTheWeek = "It is the sixth day of the week";
      break;
    case "Saturday" :
      dayOfTheWeek = "It is the seventh day of the week";
      break;
    default :
      dayOfTheWeek = "please enter a valid day of the week";
  }
  return dayOfTheWeek;
}
