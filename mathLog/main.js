let getAllSymbols = document.querySelectorAll(".hint");
let textBarFormula = document.getElementById("textBarFormula");

//Кнопка включения капсЛока в окне ввода выражений 
let capsLockEffect = document.querySelector(".capsLockEffect");
let capsLockEffectStatus = false;
capsLockEffect.addEventListener("click", function(){
  this.classList.toggle("falseButton");
  this.classList.toggle("trueButton");
  var capsLockEffectCheckbox = document.querySelector(".capsLockEffect__checkbox");

  if(this.classList.contains("trueButton")){
    capsLockEffectCheckbox.innerHTML = "V";
    capsLockEffectStatus = true;
    textBarFormula.style.textTransform = "uppercase";
  }else{
    capsLockEffectCheckbox.innerHTML = "X";
    capsLockEffectStatus = false;
    textBarFormula.style.textTransform = "lowercase";
  }
});
//Кнопка включения капсЛока в окне ввода выражений //

//Добавление нового символа в поле ввода выражений через клик
function setNewStringTextArea(symbol){
  let textBarFormulaValue = textBarFormula.value;
  textBarFormula.classList.remove("uppercase");
  textBarFormula.value = textBarFormulaValue + symbol;
};

getAllSymbols.forEach((item) => 
  item.addEventListener('click', function(e){
  e.preventDefault();
  let symbol = item.children[0].textContent;
    if(capsLockEffectStatus){
      setNewStringTextArea(symbol);
    }else{
      setNewStringTextArea(symbol);
    }
    })
  );
//Добавление нового символа в поле ввода выражений через клик//


//Добавление нового символа в поле ввода выражений через сочетание клавиш
document.onkeydown = function(e) {
    e = e || window.event;
    let counter = 0;
    for(i=49; i<=57; i++){
      if (e.altKey && e.keyCode == i) {
        symbol = getAllSymbols[counter].children[0].textContent;
        if(capsLockEffectStatus){
          setNewStringTextArea(symbol);
        }else{
          setNewStringTextArea(symbol);
        }
      }
      counter++;
    }
    counter = 0;
    if (e.altKey && e.keyCode == 48) {
      symbol = getAllSymbols[9].children[0].textContent;
      if(capsLockEffectStatus){
        setNewStringTextArea(symbol);
      }else{
        setNewStringTextArea(symbol);
      }
    }
  }
//Добавление нового символа в поле ввода выражений через сочетание клавиш // 

//Именение шрифта в поле ввода выражений через ползунок

var getValueFontSizeRange = document.getElementById("fontSizeRange");
var outputGetValueFontSizeRange = document.getElementById("fontSizeRangeValue");

getValueFontSizeRange.oninput = function(){
  outputGetValueFontSizeRange.innerHTML = getValueFontSizeRange.value;
  editFontSize = outputGetValueFontSizeRange.textContent + "px";
  textBarFormula.style.fontSize = editFontSize;
};

//Именение шрифта в поле ввода выражений через ползунок//

//Проверка на наличие русских букв
var onlyEnglichWordsStatus = false;
var onlyEnglichWords = document.querySelector(".onlyEnglichWords");

onlyEnglichWords.addEventListener("click", function(){
  this.classList.toggle("falseButton");
  this.classList.toggle("trueButton");
  var onlyEnglichWordsCheckbox = document.querySelector(".OnlyEnglichWordsCheckbox");

  if(this.classList.contains("trueButton")){
    onlyEnglichWordsCheckbox.innerHTML = "V";
    onlyEnglichWordsStatus = true;
  }else{
    onlyEnglichWordsCheckbox.innerHTML = "X";
    onlyEnglichWordsStatus = false;
  }
  if(onlyEnglichWordsStatus){
    checkOnlyEnglichWords();
  }else{
    textBarFormula.oninput = null;
  }
});
function checkOnlyEnglichWords(){
  textBarFormula.oninput = function(){
    var regexp = /[А-Я]/gi;
    var matches_array = textBarFormula.value.match(regexp);
    if (matches_array != null) {
      alert("В поле ввода не должно быть русских символов.")
      textBarFormula.value = textBarFormula.value.slice(0, -1);
    }
  }
}

//Проверка на наличие русских букв//