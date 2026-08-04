function isElevatorSafe(weights) {

    if(!Array.isArray(weights))
        return "Invalid";

    let sum = 0;
    for(let i = 0; i < weights.length; i++){
        if(typeof weights[i] !== "number" || Number.isNaN(weights[i]) || !Number.isFinite(weights[i]))
            return "Invalid";
        sum += weights[i];
    }

    if(sum <= 400)
        return true;
    else
        return false;
}

console.log(isElevatorSafe([])); // true
console.log(isElevatorSafe([100, 200, 50])); // true
console.log(isElevatorSafe([100, 200, 150])); // false
console.log(isElevatorSafe([60, NaN, 50])); // false
console.log(isElevatorSafe([60, undefined, 50])); // false