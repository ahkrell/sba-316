// Changes the text and style when a box is clicked
function changeText(box){
    box.innerText = "💥";
    box.style.color = "#fff";
    box.style.backgroundColor = "#66c";
}
// Changes the border when the mouse enters
function changeBorder(box){
    box.style.border = "solid #e00 5px";
}
// Changes back the border when the mouse leaves
function changeBorderBack(box){
    box.style.border = "solid #000 5px";
}
// Displays an alert box if the first character in the input element is not uppercase
function validateUsername(){
    let username = document.querySelector("input").value;
    let firstChar = username.charAt(0);
    if(firstChar == firstChar.toLowerCase()){
        alert ("First character must be uppercase");
    }
}

document.getElementById("header").style.color = "#44f";
document.querySelector("h1").style.fontFamily = "Arial, Helvetica, sans-serif";

// Adds an event listener for changes in the form
const form = document.getElementById("form");
form.addEventListener("change", validateUsername);

// Iterates to create the minesweeper field and add event listeners
for(let i = 0; i < 25; i++){
    const box = document.createElement("div");
    box.innerText = "❓";
    box.addEventListener("click", function(){
        changeText(box);
    });
    box.addEventListener("mouseenter", function(){
        changeBorder(box);
    });
    box.addEventListener("mouseleave", function(){
        changeBorderBack(box);
    });
    document.getElementById("grid").appendChild(box);
}
// Creates an element to display BOM information
const userInfo = document.createElement("h2");
userInfo.innerText = "The pathname of this page is " + window.location.pathname
                     + " and your browser is " + window.navigator.appName;
document.body.appendChild(userInfo);