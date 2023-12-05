const task3Element = document.getElementById('task-3');
let hba = "hba"

function myAlert() {
    alert("Hey, hello there!");
}

function nameAlert(name) {
    alert(`Hello ${name}`);
}
//myAlert();
nameAlert(hba);

task3Element.addEventListener("click", myAlert)

function thirdfunc(my, name, is) {
    alert(`${my} ${name}, ${is}`);
}
thirdfunc("welcome", "you", "hba");
