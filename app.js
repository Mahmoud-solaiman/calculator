//Model
const resetBtn = document.querySelector('.reset');
const calcScreen = document.querySelector('.screen');
const deleteBtn = document.querySelector('.delete');
const keys = document.querySelectorAll('.key:not(.delete,.reset,.equal')
const equalBtn = document.querySelector('.equal');

//View

//Controller
//Reset the screen value
resetBtn.addEventListener('pointerup',()=>{
    calcScreen.textContent = '';
});

//Delete a number off of the screen value
deleteBtn.addEventListener('pointerup', ()=>{
    const screenValue = calcScreen.textContent;
    calcScreen.textContent = screenValue.slice(0, -1);
});

//Setting the functionality of the calculator keys
keys.forEach(key=>{
    key.addEventListener('pointerup', ()=>{
        const screenValue = calcScreen.textContent;
        calcScreen.textContent = screenValue + key.textContent;
    });
});

equalBtn.addEventListener('pointerup', ()=>{
    const screenValue = Number(calcScreen.textContent);
});