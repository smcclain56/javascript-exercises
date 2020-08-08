const fs = require('fs');


// 1 - What floor does Santa end up on
function findEndFloor() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('q1 = santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    const lastFloor = directionsArray.reduce((acc, currentItem) => {
      if(currentItem === '('){
        return acc += 1;
      }else if(currentItem === ')'){
        return acc -= 1;
      }
    }, 0)
    console.timeEnd('q1 = santa-time');
    console.log('floor:', lastFloor);
  })
}

findEndFloor();

// 2 - When does Santa first enter the basement
function enterBasement(){
  fs.readFile('./santa.txt', (err,data) => {
    console.time('q2 = santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if(currentItem === '('){
        accumulator++;
      }else if(currentItem === ')'){
        accumulator--;
      }
      counter++;
      return accumulator < 0;
    })
    console.timeEnd('q2 = santa-time');
    console.log('basement entered at ', counter);
  })
}

//enterBasement();
