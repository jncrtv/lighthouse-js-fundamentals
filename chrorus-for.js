const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");

let num = 100;

while(num < 200){
  if (num % 3 === 0){
    console.log("Loopy");
  }
  if (num % 4 === 0){
    console.log("Lighthouse");
  }
  if (num % 3 === 0 && num % 4 === 0){
    console.log("LoopyLighthouse");
  }
}

const chooseStations = function(stations){
  const goodStations = []

  for (const station of stations){
    const capacity = station[1]

    if (capacity >= 20){

      const type = station[2]

      if (type === "school" || type === "community centre"){
        goodStations.push(station[0])
      }
    }
  }

 return goodStations
}

const finalPosition = function (moves) {
  let y = 0
  let x = 0
  const arr = []
  for (const move of moves){
    switch (move){
      case 'north':
        y++
        break
      case 'south':
        y--
        break
      case 'east':
        x++
        break
      case 'west':
        x--
        break
      default:
        break
    }
  }
  arr.push(x)
  arr.push(y)

  return arr
}

const ageCalculator = function (name, yearOfBirth, currentYear){
  const ageString = name + ' is ' + (currentYear - yearOfBirth) + ' years old.'
  
  return ageString
}

const howManyHundreds = function (num){
  const tempNum = num % 100
  const answer = (num - tempNum) / 100

  return answer
}


const calculateRectangleArea = function(length, width){
  if (length <= 0 || width <= 0){
    return undefined
  }
  return length * width
}

const calculateTriangleArea = function(base, height){
  if (base <= 0 || height <= 0){
    return undefined
  }
  return base * height / 2
}

const calculateCircleArea = function(radius){
  if (radius <= 0){
    return undefined
  }
  return Math.pow (radius,2) * Math.PI
}