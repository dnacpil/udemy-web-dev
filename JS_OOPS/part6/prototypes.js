let computer = {
    cpu: 12
}
let lenova = {
    screen: "HD",
    __proto__: computer //you're saying you want to access to the properties that are in computer
}
let tomHardware = {}

//console.log(`lenova `, lenova.__proto__)

let genericCar = {tyres: 4}
let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla, genericCar) // same as __proto__ which is a lot better
console.log(`tesla `, Object.getPrototypeOf(tesla))