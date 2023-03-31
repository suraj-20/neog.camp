var inputTxtArea = document.querySelector("#inputTxtArea");
var translateBtn = document.querySelector("#translationBtn");
var ouputTxt = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/emoji.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function clickHandler() {
    var inputText = inputTxtArea.value;

    fetch(getTranslationURL(inputText))
    .then(res => res.json())
    .then(json => {
        var translatedText = json.contents.translated;
        ouputTxt.innerHTML = translatedText;
        console.log(json)
    })
    
}

translateBtn.addEventListener('click', clickHandler);