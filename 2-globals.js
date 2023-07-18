//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)
const john = 'john'
const peter = 'peter'
const sayHi = (name)=> {
    console.log(`Hello there ${name}`)
}

module.exports = {sayHi}
