// const minus = document.getElementById('minus');
// let value = document.querySelectorALL('value');
// let plus = document.querySelectorAll('plus')



// const updateValue = () => {
//     value.innerHTML = count;
// }
 
// let count = 0;
// let intervalId = 0;



// plus.addEventListener('mousedown', () => {
//     intervalId = setInterval(() => {
//         count += 1;
//         updateValue();
//     }, 100);
// });

// minus.addEventListener('mousedown', () => {
//     intervalId = setInterval(() => {
//         count -= 1;
//         updateValue();
//     }, 100);
// });

// document.addEventListener('mouseup', () => clearInterval(intervalId));

// let counter = 0;

// function increment() {
//     counter = counter + 1;
//     mostrarNaTela();
// }

// function decrement() {
//     if(counter == 1)
//         counter = 1;
//     else if(counter > 1)
//         counter = counter - 1;
//     mostrarNaTela();
// }

// function mostrarNaTela() {
//     const value = document.getElementById('valeu');
//     value.innerHTML = counter;
// }

const minus = document.getElementById('minus');
const value = document.getElementById('value');
const plus = document.getElementById('plus')

const updateValue = () => {
    value.innerHTML = count;
} 
let count = 0;

plus.addEventListener('mousedown', () => {
    count = count + 1;
    updateValue();    
});

minus.addEventListener('mousedown', () => {
    if(count == 1)
        count = 1;
     else if(count > 1)
         count = count - 1;
    updateValue();   
});

// -------------------------------------------------------



