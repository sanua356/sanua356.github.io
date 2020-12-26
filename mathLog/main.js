let getAllSymbols = document.querySelectorAll(".hint");
let textBarFormula = document.getElementById("textBarFormula");
let capsLockEffect = document.querySelector(".capsLockEffect");
let capsLockEffectStatus = false;


capsLockEffect.addEventListener("click", function(){
  this.classList.toggle("falseCapsLock");
  this.classList.toggle("trueCapsLock");
  var capsLockEffectCheckbox = document.querySelector(".capsLockEffect__checkbox");

  if(this.classList.contains("trueCapsLock")){
    capsLockEffectCheckbox.innerHTML = "V";
    capsLockEffectStatus = true;
  }else{
    capsLockEffectCheckbox.innerHTML = "X";
    capsLockEffectStatus = false;
  }
});



function setNewStringTextAreaNotCapsLock(symbol){
  let textBarFormulaValue = textBarFormula.value;
  textBarFormula.classList.remove("uppercase");
  textBarFormula.value = textBarFormulaValue + symbol;
};
function setNewStringTextAreaCapsLock(symbol){
  let textBarFormulaValue = textBarFormula.value;
  textBarFormula.classList.add("uppercase");
  textBarFormula.value = textBarFormulaValue + symbol;
};


getAllSymbols.forEach((item) => 
  item.addEventListener('click', function(e){
  e.preventDefault();
  let symbol = item.children[0].textContent;
    if(capsLockEffectStatus){
      setNewStringTextAreaCapsLock(symbol);
    }else{
      setNewStringTextAreaNotCapsLock(symbol);
    }
    })
  );




document.onkeydown = function(e) {
    e = e || window.event;
    let counter = 0;
    for(i=49; i<=57; i++){
      if (e.altKey && e.keyCode == i) {
        symbol = getAllSymbols[counter].children[0].textContent;
        if(capsLockEffectStatus){
          setNewStringTextAreaCapsLock(symbol);
        }else{
          setNewStringTextAreaNotCapsLock(symbol);
        }
      }
      counter++;
    }
    counter = 0;
    if (e.altKey && e.keyCode == 48) {
      symbol = getAllSymbols[9].children[0].textContent;
      if(capsLockEffectStatus){
        setNewStringTextAreaCapsLock(symbol);
      }else{
        setNewStringTextAreaNotCapsLock(symbol);
      }
    }
  }

