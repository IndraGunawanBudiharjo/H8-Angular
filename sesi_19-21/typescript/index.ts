// demo

// variable assignment
// [let | const] [variablename]: [datatype] = [value]
// const message: string = "Hello FSD OCBC 1";

// const anyMessage: string | number = 12345

// using multi data type in array
// const anyMessage: (string | number)[] = [12345, ''];

// let students: (string | boolean)[][] = [
//     ['Gusti', true, false],
//     ['Ricky', false]
// ]


// let employees: any[] = [
//     ['Budi', true, false],
//     ['Ratna', false]
// ]

// console.log(anyMessage);

// Declare Function

// ?parameter -> optional parameter
// or set default value parameter = value

// const greetParticipant = function(name: string, age?: number) {
//     console.log(`Hello ${name}! Your age is ${age}.`)
// }

// greetParticipant('Randy');

// Declare Object
// let person : {
//     name: string
//     age?: number | string
//     isMarried: boolean
// } = {
//     name: 'Maryam',
//     age: 17,
//     isMarried: false
// }

// Declare interface 
interface StudentObject {
    name: string
    age?: number | string
    isMarried?: boolean // optional
} 

let person : StudentObject = {
    name: 'Maryam',
    age: 17,
    isMarried: false
}

// Declare Class

class Student implements StudentObject {
    private id: number;
    public name: string;
    public age: number | string;
    public score: number;

    constructor(id: number, name: string, age: number | string, score: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.score = score;
    }

    changeScore(score: number) {
        if(score >= 0 && score <= 100) {
            this.score = score;
        }
        else {
            console.log("score not valid")
        }
    }

}

const riyan = new Student(1, "riyan", 20, 70);
console.log(riyan);