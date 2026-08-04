function averageResponseTime(times) {
    if (!Array.isArray(times) || times.length === 0){
        return "Invalid";
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {

        if(typeof times[i] !== "number" || Number.isNaN(times[i]) || !Number.isFinite(times[i]) || times[i] < 0) 
            return "Invalid";
    
        total += times[i];
    }

    return total / times.length;
}

console.log(averageResponseTime([100, 200, 300]));          // 200
console.log(averageResponseTime([50, 75, 125, 150]));       // 100
console.log(averageResponseTime([500]));                    // 500
console.log(averageResponseTime([0, 0, 0]));                // 0
console.log(averageResponseTime([120.5, 130.5]));           // 125.5

console.log(averageResponseTime([]));                       // Invalid
console.log(averageResponseTime("100,200"));                // Invalid
console.log(averageResponseTime(null));                     // Invalid
console.log(averageResponseTime(undefined));                // Invalid
console.log(averageResponseTime([100, "200", 300]));        // Invalid
console.log(averageResponseTime([100, NaN, 300]));          // Invalid
console.log(averageResponseTime([100, Infinity, 300]));     // Invalid
console.log(averageResponseTime([100, -50, 300]));          // Invalid