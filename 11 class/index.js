
// 1. Create a javascript function which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.


let inputOne = document.querySelector('div').children[3];
console.log(inputOne);

let checkButton = document.querySelector('div').children[6];
console.log(checkButton);

let result = document.getElementsByTagName('p')[0];
console.log(result);



function checkEvenNumbers(numberArr, element){

    for ( let number of numberArr){
        if ((number  % 2) == 0) {
            console.log(number);
            element.innerText += `${number} -`
        } else {
            element.innerText += `${number} `
    }
  
} 
};


checkButton.addEventListener('click', function(){
    let valueOne = inputOne.value;
    
    checkEvenNumbers(valueOne, result);
    
});



// 2. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.


let divElement = document.getElementsByTagName('div')[1];

let buttonTwo = document.querySelectorAll('div')[1];
console.log(buttonTwo);

let resultPar = document.getElementsByTagName('p')[2];

console.log(resultPar);


function checkNumbers (number, element){
    
    for (let i=0; i<=100; i++){
        if ( i % 7 == 0 && i % 3 == 0 ){
            element.innerText += `${i},`;
            
        } 
    }
    element.innerHTML += `<p> YAAAAY! I'm done! </p>`
}

buttonTwo.addEventListener('click', function(){
    
    checkNumbers(100, resultPar);
})


