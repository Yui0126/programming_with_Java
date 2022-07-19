// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (products of dairy) {
        console.log(products)
    }
}
logDairy();

// Task 2

const animal = {
    canJump: true,
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

console.log(animal)
console.log(bird)
console.log(Object.values(bird));

function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key, ": ", bird[key])
    }
}
birdCan();

// Task 3



function animalCan() {
    for (prop in bird) {
        console.log(prop, ": ", bird[key]);
    }
}
animalCan();