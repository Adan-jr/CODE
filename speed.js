const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);
        
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

rl.question("Enter the speed of the car: ", function(input) {
    let speed = Number(input);
    
    if (isNaN(speed)) {
        console.log("Invalid input! Please enter a numerical value.");
    } else {
        speedDetector(speed);
    }
    
    rl.close();
});
