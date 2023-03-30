var btnClick = document.querySelector("#btn-click");
var txtInput = document.getElementById("txt-input");
var outputTxt = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}


function clickHandler() {
  var inputText = txtInput.value;
  
  fetch(getTranslationURL(inputText))
  .then((res) => res.json())
  .then((json) => {
      var translatedText = json.contents.translated;
      outputTxt.innerHTML = translatedText;
    })
    .catch(errorHandler);
}

function errorHandler(error) {
    console.log("Error occured 😩", error);
    alert("Something wrong with server! Try again after some time(●'◡'●)")
}

btnClick.addEventListener("click", clickHandler);

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
