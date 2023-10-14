class School {
    constructor(name,level,numberOfStudent){
        this._name = name;
        this._level = level;
        this._numberOfStudent = numberOfStudent;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudent(){
        return this._numberOfStudent;
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudent} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers=[]){
        this.randomNumber = Math.floor(Math.random()*substituteTeachers>substituteTeachers.length);
        return substituteTeachers[this.randomNumber];

    }
    set numberOfStudent(newNumberOfStudents){
        if(isNaN(newNumberOfStudents)){
            console.log('Invalid input: numberOfStudents must be set to a Number')
        }
        this._numberOfStudent = newNumberOfStudents;
    }
}

class PrimarySchool extends School{
    constructor(_name,_numberOfStudent,pickupPolicy){
        super(_name,_numberOfStudent,pickupPolicy) ;
        this._level = 'primary';
        pickupPolicy = '';
    }
    get primarySchoolLevel(){
        return this._level
    }
    get primarySchoolPickupPolicy(){
        return this.pickupPolicy
    }
}

class HighSchool extends School{
    sportsTeams = [""];
    get sportsTeams (){
        console.log('')
    }
}

// primary school object(instance) call
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(lorraineHansbury.quickFacts())
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

// High school object(instance) call
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
// console.log(alSmith)
// console.log(alSmith.sportsTeams)