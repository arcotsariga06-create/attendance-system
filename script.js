function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "1234"){
window.location.href="dashboard.html";
}
else{
document.getElementById("message").innerHTML="Invalid Login";
}

}

function addStudent(){

let name = document.getElementById("studentName").value;

localStorage.setItem("student",name);

document.getElementById("studentMessage").innerHTML="Student Added";

}

function markPresent(){

let name = document.getElementById("attendanceName").value;

document.getElementById("attendanceMessage").innerHTML=name + " marked Present";

}

function markAbsent(){

let name = document.getElementById("attendanceName").value;

document.getElementById("attendanceMessage").innerHTML=name + " marked Absent";

}
