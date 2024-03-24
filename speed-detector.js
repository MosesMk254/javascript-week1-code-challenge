// speed detector
// For obtaining a speed of moving objects
// if my function is performing calculation related to the speed given and returning the correct output

// assigning the constant speed limit and the constant demerit point per everry 5 km/h
const speedLimit = 70;
const kmPerDemeritPoint = 5;

function calcSpeed(speed) {
  // assingning a variable points that will be given for every demerit after 5km/h above 70km/h
  let points = 0;

  // if else statement to check if the speed is less than or equal to 70km/h, and if itthe condition is true we return ok else add a point after every 5km/h
  if (speed <= speedLimit) {
    return "OK";
  } else {
    points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    // then after chec if points exceedes 12 and if so suoend license
    if (points > 12) {
      return "Licence suspended";
    } else {
      return ` points: ${points}`;
    }
  }
}
console.log(calcSpeed(80));
