// Code your solution in this file!
// Distance from HQ in blocks
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

// Distance from HQ in feet
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

// Distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

// Calculates fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // Charges 2 cents per foot after first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distances over 2000 feet up to 2500 feet
    } else {
        return 'cannot travel that far'; // Does not allow rides over 2500 feet
    }
}

// Example usage
console.log(distanceFromHqInBlocks(50)); // 8 blocks
console.log(distanceFromHqInFeet(50)); // 2112 feet
console.log(distanceTravelledInFeet(34, 38)); // 1056 feet
console.log(calculatesFarePrice(34, 38)); // 13.12 (for 1056 feet minus first 400 free = 656 feet * $0.02)
console.log(calculatesFarePrice(34, 24)); // Free sample (for less than 400 feet)
console.log(calculatesFarePrice(34, 24)); // Free sample (for less than 400 feet)
console.log(calculatesFarePrice(23, 43)); // 25 dollars (for more than 2000 feet but less than 2500 feet)
console.log(calculatesFarePrice(34, 3000)); // 'cannot travel that far' (for more than 2500 feet)
