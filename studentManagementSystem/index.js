#!/usr/bin/env node
import inquirer from "inquirer";
console.log(`Welcome to the student management system!\n`);
class Student {
    name;
    static id = 0;
    studentId;
    courses = [];
    balance = 0;
    constructor(name) {
        this.name = name;
        Student.id++;
        this.studentId = this.generateStudentId();
    }
    generateStudentId() {
        return 10000 + Student.id;
    }
    enrollCourse(course) {
        this.courses.push(course);
        this.balance += 1000;
    }
    viewBalance() {
        return this.balance;
    }
    payCourseFees(amount) {
        this.balance -= amount;
    }
    showStatus() {
        const consoleWidth = process.stdout.columns;
        const center = (text) => {
            const padding = Math.max(0, (consoleWidth - text.length) / 2);
            return " ".repeat(padding) + text;
        };
        console.log(center(`Name: ${this.name}`));
        console.log(center(`Student Id: ${this.studentId}`));
        console.log(center(`Courses Enrolled: ${this.courses.join(", ")}`));
        console.log(center(`Balance: ${this.balance}`));
    }
    getStudentId() {
        return this.studentId;
    }
    getName() {
        return this.name;
    }
}
const students = [];
async function mainMenu() {
    const inputUser = await inquirer.prompt({
        type: "list",
        name: "menu",
        message: "Select your menu",
        choices: [
            "Add New student",
            "Enroll student in Course",
            "View Student Balance",
            "Pay course fees",
            "Show Student Status",
            "End Menu",
        ],
    });
    const { menu } = inputUser;
    if (menu === "Add New student")
        await addNewStudent();
    if (menu === "Enroll student in Course")
        await enrollStudent();
    if (menu === "View Student Balance")
        await viewBalance();
    if (menu === "Pay course fees")
        await payCourse();
    if (menu === "Show Student Status")
        await showStatus();
    if (menu === "End Menu") {
        console.log(`Thank you for using the Student management system\n`);
        process.exit();
    }
    mainMenu();
}
async function addNewStudent() {
    const inputUser = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter Student Name",
    });
    const student = new Student(inputUser.name);
    students.push(student);
    console.log(`Student ${student.getName()} added with id ${student.getStudentId()} `);
}
async function enrollStudent() {
    const student = await selectStudent();
    if (student) {
        const inputUser = await inquirer.prompt({
            type: "list",
            name: "course",
            message: "Select Course to enroll",
            choices: ["html", "css", "javascript", "typescript"],
        });
        student.enrollCourse(inputUser.course);
        console.log(`Successfully Enrolled in Course: ${inputUser.course}`);
    }
}
async function viewBalance() {
    const student = await selectStudent();
    if (student) {
        console.log(`Balance: ${student.viewBalance()}`);
    }
}
async function payCourse() {
    const student = await selectStudent();
    if (student) {
        const inputUser = await inquirer.prompt({
            type: "input",
            name: "amount",
            message: "Enter Amount you want to pay",
        });
        student.payCourseFees(parseFloat(inputUser.amount));
        console.log(`Paid ${inputUser.amount}. Balance remaining: ${student.viewBalance()}`);
    }
}
async function showStatus() {
    const student = await selectStudent();
    if (student) {
        student.showStatus();
    }
}
async function selectStudent() {
    if (students.length === 0) {
        console.log(`No record Found`);
        return null;
    }
    else {
        const stdSelect = await inquirer.prompt({
            type: "list",
            name: "stdId",
            message: "Select a Student",
            choices: students.map((std) => ({
                name: std.getName(),
                value: std.getStudentId(),
            })),
        });
        return (students.find((std) => std.getStudentId() === stdSelect.stdId) || null);
    }
}
mainMenu();
