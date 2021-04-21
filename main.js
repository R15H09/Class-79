name_of_students= [];

function submit() {
    var name_1= document.getElementById("student_name_1").value;
    var name_2= document.getElementById("student_name_2").value;
    var name_3= document.getElementById("student_name_3").value;
    var name_4= document.getElementById("student_name_4").value;

name_of_students.push(name_1);
name_of_students.push(name_2);
name_of_students.push(name_3);
name_of_students.push(name_4);

console.log(name_of_students);
document.getElementById("display_name").innerHTML= name_of_students;

document.getElementById("submit_button").style.display= "none";
document.getElementById("sort_button").style.display= "inline-block";

}

function sorting() {
    name_of_students.sort();
    console.log(name_of_students);
document.getElementById("display_name").innerHTML= name_of_students;
}