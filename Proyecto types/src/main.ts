import { Activity } from "./entities/actividad.entity";
import { calification } from "./entities/calificaciones.entity";
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities:Activity[] = [];
let Calification: calification[] = [];


enum Course{
    interfaces = "interfaces",
    Algebra = "Algebra",
    Basedb = "Basedb",
}
enum Area{
    culinaria = "arte culinaria",
    Marketing = "Marketing",
    desarrollo = "desarrollo",
    matematicadiscreta = "matematicadiscreta",
}
function initCourse():void{
    let courseGradeBook = document.getElementById("course") as HTMLSelectElement;
    let courses = Object.values(Course);
courses.forEach(
    (value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       courseGradeBook.add(option);
    }
);
}
initCourse();
function initArea():void{
    let area = document.getElementById("class") as HTMLSelectElement;
    let areas = Object.values(Area);
areas.forEach(
    (value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       area.add(option);
    }
);
}
initArea();



function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
        edad :parseInt(readFormHtml("edad"))
    }
    students.push(currentStudent);
    console.table(students);
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        title : readFormHtml("title"),
        class : readFormHtml("class")
    }
    teachers.push(currentTeacher);
    console.table(teachers);
}
function addcalifcacionMaxima(): void {
    let currentcalification: calification = {
        course: readFormHtml("course"),
        activity: readFormHtml("activity"),
        examn: readFormHtml("examn"),
        califcacionMaxima: parseInt(readFormHtml("califcacionMaxima")),
    }
    Calification.push(currentcalification);
    console.table(Calification);
}

function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name"),
    }
    activities.push(currentActivity);
    console.table(activities);
    initCourse();
}



function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id))!.value;
}