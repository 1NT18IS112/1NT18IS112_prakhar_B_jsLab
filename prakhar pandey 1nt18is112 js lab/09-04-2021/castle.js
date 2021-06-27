const a1 = document.getElementById("area1");
const a2 = document.getElementById("area2");
const a3 = document.getElementById("area3");
const a4 = document.getElementById("area4");

const result = document.getElementById("result");

let flag = 0;

a1.addEventListener("mouseover", (e) => {
    console.log("area1");
});

a2.addEventListener("mouseover", (e) => {
    console.log("area2");
});

a3.addEventListener("mouseover", (e) => {
    console.log("area3");
});

a4.addEventListener("mouseover", (e) => {
    console.log("area4");
});

a1.addEventListener("click", (e) => {
    if (e.target.id == "area1") {
        result.innerHTML += "Go to blue area </br>";
        flag = 1;
    } else if (e.target.id == "area2") {
        if (flag != 1) {
            result.innerHTML += "You have failed , start again from green area</br>";
        }
        else {
            result.innerHTML += "Go to red area </br>";
            flag = 2;
        }
    } else if (e.target.id == "area3") {

        if (flag != 2) {
            result.innerHTML += "You have failed , start again from green area</br>";
        }
        else {
            result.innerHTML += "Go to grey area </br>";
            flag = 3;
        }
    } else if (e.target.id == "area4") {
        if (flag != 3) {
            result.innerHTML += "You have failed , start again from green area</br>";
        }
        else {
            result.innerHTML += "You have completed it.";
            window.location.reload();
            flag = 0;
        }
    }
});