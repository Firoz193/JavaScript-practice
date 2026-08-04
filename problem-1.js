function matchWinner(teamAGoals, teamBGoals) {

    if((typeof teamAGoals) !== "number" || (typeof teamBGoals) !== "number" || Number.isNaN(teamAGoals) || Number.isNaN(teamBGoals) || !Number.isFinite(teamAGoals) || !Number.isFinite(teamBGoals))
        return "Invalid";

    if(teamAGoals > teamBGoals)
        return "Team A Won";
    else if(teamAGoals < teamBGoals)
        return "Team B Won";
    else 
        return"Draw";
}

console.log(matchWinner(3, 2)); // Team A Won
console.log(matchWinner(1, 4)); // Team B Won
console.log(matchWinner(2, 2)); // Draw
console.log(matchWinner("3", 2)); // Invalid
console.log(matchWinner(3, "2")); // Invalid
console.log(matchWinner("3", "2")); // Invalid
console.log(matchWinner(NaN, 2)); // Invalid
console.log(matchWinner(3, NaN)); // Invalid
console.log(matchWinner(NaN, NaN)); // Invalid
console.log(matchWinner(undefined, 2)); // Invalid
console.log(matchWinner(3, undefined)); // Invalid
console.log(matchWinner(undefined, undefined)); // Invalid
console.log(matchWinner(null, 2)); // Invalid
console.log(matchWinner(3, null)); // Invalid
console.log(matchWinner(null, null)); // Invalid
console.log(matchWinner([], 2)); // Invalid
console.log(matchWinner(3, [])); // Invalid 
console.log(matchWinner([], [])); // Invalid
console.log(matchWinner(Infinity, 2)); // Invalid
console.log(matchWinner(-Infinity, 2)); // Invalid

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(10));
// console.log(Number.isNaN(0/0));