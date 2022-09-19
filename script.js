let changeBgColorBtn = document.getElementById("changeBgColorBtn");
let changeTxtColorBtn = document.getElementById("changeTxtColorBtn")
let bgColor = document.getElementById("changeBackgroundColor");
let txtColor = document.getElementById("changeTextColor");

changeBgColorBtn.addEventListener("click", changeBgColor);
changeTxtColorBtn.addEventListener("click", changeTxtColor)

function changeBgColor() {
    console.log(bgColor.value);
}

function changeTxtColor() {
    console.log(txtColor.value);
}