//Model
const resetBtn = document.querySelector('.reset');
const deleteBtn = document.querySelector('.delete');
const keys = document.querySelectorAll('.key:not(.delete,.reset,.equal')
const equalBtn = document.querySelector('.equal');
const calcScreen = document.querySelector('.screen');
const labels = document.querySelectorAll('label');


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
    calcScreen.textContent = eval(calcScreen.textContent);
});

labels.forEach(label=>{
    label.addEventListener('pointerup', ()=>{
        const container = document.getElementById('container');
        const title = document.querySelector('.title');
        const themeLabel = document.querySelector('.theme');
        const keysContainer = document.querySelector('.keys-container');
        const toggleContainer = document.querySelector('.toggle-switcher-container');

        if(label.textContent === '1'){
            container.classList = 'container';
            title.classList = 'title';
            calcScreen.classList = 'screen';
            themeLabel.classList = 'theme';
            keysContainer.classList = 'keys-container';
            deleteBtn.classList = 'key delete';
            resetBtn.classList = 'key col-2 reset';
            equalBtn.classList = 'key col-2 equal';
            toggleContainer.classList = 'toggle-switcher-container'


            keys.forEach(key=>{
                key.classList = 'key'
            })
            
            labels.forEach(label=>{
                label.classList = '';
            });
        } if(label.textContent === '2'){
            container.classList = 'container container-2';
            title.classList = 'title black-text';
            calcScreen.classList = 'screen screen-2';
            themeLabel.classList = 'theme black-text';
            keysContainer.classList = 'keys-container keys-container-2';
            deleteBtn.classList = 'key delete delete-reset-2';
            resetBtn.classList = 'key col-2 reset delete-reset-2';
            equalBtn.classList = 'key col-2 equal equal-2';
            toggleContainer.classList = 'toggle-switcher-container toggle-switcher-container-2'


            keys.forEach(key=>{
                key.classList = 'key key-2'
            })
            
            labels.forEach(label=>{
                label.classList = 'black-text';
            });
        } if(label.textContent === '3'){
            container.classList = 'container container-3';
            title.classList = 'title yellow-text';
            calcScreen.classList = 'screen screen-3';
            themeLabel.classList = 'theme yellow-text';
            keysContainer.classList = 'keys-container keys-container-3';
            deleteBtn.classList = 'key delete delete-reset-3';
            resetBtn.classList = 'key col-2 reset delete-reset-3';
            equalBtn.classList = 'key col-2 equal equal-3';
            toggleContainer.classList = 'toggle-switcher-container toggle-switcher-container-3'


            keys.forEach(key=>{
                key.classList = 'key key-3'
            })
            
            labels.forEach(label=>{
                label.classList = 'yellow-text';
            });
        }
    });
});