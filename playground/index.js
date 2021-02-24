// @ts-check
const {add} = require ('./calculator')
/**
 * author Angelus
  //* @see <a href = "https://github.com/Angelus123">IZERE Ange Felix</a>
 * @type {string}
 */
const authorName = 'John Doe'
/**
 * Array of grades
 * @type{Array<number>}
 */
const grades = [98,97.7,76,89]

/**
 * Todo Object
 * @type{{id:number|string,text:string}}
 */
const todo ={
    id:'1',
    text: 'Hello'
}
/**
 * 
 * @param {number} amount -Total amount
 * @param {number} tax -Tax percentage
 * @returns{string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`
}
// console.log(calculateTax(100, 0.1))
/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student is active
 * @property {boolean} isActive - Student is active
 */
/**
 * @type {Student}
 */
const student ={
    id:1,
    name: 'Angelus123',
    age: 20,
    isActive: true
}

class Person {
    /** 
     * 
     * @param {Object} personInfo Information about the person
     * 
     */
    constructor (personInfo) {
        /**
         * @property {string} name Persons name
         */
        this.name = personInfo.name
           /**
         * @property {string} age Persons age
         */
        this.age = personInfo.age
    }
    /**
     * @property {Function} greet A greeting with the name and age
     * @returns void
     */

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
    }

}

/**
 * Person one
 * see {@link Person}
 */

const person1 = new Person({
    name:'Angelus123',
    age:30
}
)
console.log(person1.greet())

console.log( add(20,30) )