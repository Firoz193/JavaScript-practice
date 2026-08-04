function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== "number" || Number.isNaN(tokensUsed) || !Number.isFinite(tokensUsed) || tokensUsed < 0)
        return "Invalid";

    if(tokensUsed <= 500)
        return 0;
    else {
        let total_extra_token = tokensUsed - 500;
        total_extra_token /= 100;
        total_extra_token = Math.floor(total_extra_token);
        return total_extra_token * 5;
    }
}

console.log(calculateAiCost(300));      // 0
console.log(calculateAiCost(500));      // 0
console.log(calculateAiCost(501));      // 0
console.log(calculateAiCost(599));      // 0
console.log(calculateAiCost(600));      // 5
console.log(calculateAiCost(650));      // 5
console.log(calculateAiCost(700));      // 10
console.log(calculateAiCost(1000));     // 25
console.log(calculateAiCost("500"));    // Invalid
console.log(calculateAiCost(-10));      // Invalid
console.log(calculateAiCost(NaN));      // Invalid