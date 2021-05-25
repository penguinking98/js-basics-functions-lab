// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(hqStreet - street);
}
function distanceFromHqInFeet(street) {
    const blockSize = 264;
    return distanceFromHqInBlocks(street)*blockSize;
}
function distanceTravelledInFeet(street1, street2) {
    const blockSize = 264;
    return Math.abs(street1-street2)*blockSize;

}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet<=400){
        return 0;
    } else if (distanceInFeet>400 && distanceInFeet<=2000) {
        return 0.02*(distanceInFeet - 400);
    } else if (distanceInFeet>2000 && distanceInFeet<=2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}