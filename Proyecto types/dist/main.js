"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let Calification = [];
var Course;
(function (Course) {
    Course["interfaces"] = "interfaces";
    Course["Algebra"] = "Algebra";
    Course["Basedb"] = "Basedb";
})(Course || (Course = {}));
var Area;
(function (Area) {
    Area["culinaria"] = "arte culinaria";
    Area["Marketing"] = "Marketing";
    Area["desarrollo"] = "desarrollo";
    Area["matematicadiscreta"] = "matematicadiscreta";
})(Area || (Area = {}));
function initCourse() {
    let courseGradeBook = document.getElementById("course");
    let courses = Object.values(Course);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            courseGradeBook.add(option);
    });
}
initCourse();
function initArea() {
    let area = document.getElementById("class");
    let areas = Object.values(Area);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            area.add(option);
    });
}
initArea();
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
        edad: parseInt(readFormHtml("edad"))
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        title: readFormHtml("title"),
        class: readFormHtml("class")
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
function addcalifcacionMaxima() {
    let currentcalification = {
        course: readFormHtml("course"),
        activity: readFormHtml("activity"),
        examn: readFormHtml("examn"),
        califcacionMaxima: parseInt(readFormHtml("califcacionMaxima")),
    };
    Calification.push(currentcalification);
    console.table(Calification);
}
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name"),
    };
    activities.push(currentActivity);
    console.table(activities);
    initCourse();
}
function readFormHtml(id) {
    return document.getElementById(id).value;
}
