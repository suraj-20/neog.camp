var btnClick = document.querySelector("#btn-click");
var txtInput = document.getElementById("txt-input");

btnClick.addEventListener("click", function clickHandler() {
    console.log("Clicked!");
    console.log(txtInput.value);
})


// var textAreaInput = document.querySelector("textarea");
// var primaryBtn = document.querySelector(".btn-primary");

// primaryBtn.addEventListener('click', function onClick() {
//     console.log("Primary btn clicked");
//     console.log(textAreaInput.value);
    
// })
// var inputBtn = document.querySelector("#input-btn");

// inputBtn.addEventListener('click', function inputbtn() {
//     console.log("input btn clicked");
// })


// var translator = document.querySelector("[translator]");

