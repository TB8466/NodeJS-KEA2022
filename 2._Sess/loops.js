
const carbatt = [0.34134,0.13414,0.1341135]

const chargeBatt = carbatt.map(battery => battery+0.4)

console.log(chargeBatt)

// place each car and its battery in a separate charger

carbatt.forEach((battery, index) => console.log(index + 1));


//filter out batteries with more than 50%

const drainedBatt = carbatt.filter(battery => battery < 0.5); //filter() <- IF true, then goes into the const

console.log(drainedBatt)