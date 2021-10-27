// demo
var person = {
    name: 'Maryam',
    age: 17,
    isMarried: false
};
// Declare Class
var Student = /** @class */ (function () {
    function Student(id, name, age, score) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.score = score;
    }
    Student.prototype.changeScore = function (score) {
        if (score >= 0 && score <= 100) {
            this.score = score;
        }
        else {
            console.log("score not valid");
        }
    };
    return Student;
}());
var riyan = new Student(1, "riyan", 20, 70);
console.log(riyan);
