#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Person {
    students: Student[] = [];
    
    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person();

const start = async (persons: Person) => {
    console.log(`Welcome`);

    while (true) {
        const ans = await inquirer.prompt({
            name: "Select",
            type: 'list',
            message: "Whom would you like to interact with?",
            choices: ['staff', 'student', 'exit']
        });

        if (ans.Select === 'staff') {
            console.log("You are in the staff room. Feel free to ask any query.");
        } else if (ans.Select === 'student') {
            const studentAns = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name you want to interact with"
            });

            let student = persons.students.find(val => val.name === studentAns.student);

            if (!student) {
                student = new Student(studentAns.student);
                persons.addStudent(student);

                console.log(`Hello, I am ${student.name}. Nice to meet you.`);
                console.log("New student added.");
                console.log("Current student list:");
                console.log(persons.students);
            } else {
                console.log(`Hello, I am ${student.name}. Nice to see you again.`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        } else if (ans.Select === 'exit') {
            console.log("Exiting the program");
            break;
        }
    }
}

start(persons);
