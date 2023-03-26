var btnClick = document.querySelector("#btn-click");
var txtInput = document.getElementById("txt-input");

btnClick.addEventListener("click", function clickHandler() {
    console.log("Clicked!");
    console.log(txtInput.value);
})