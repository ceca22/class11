// 3. Create a Javascript ATM machine. 
//The ATM should have the following functions:
//- make desposit (this function should add money to the users balance)
//- make withdrawal (this function should should withdraw money to the users balance)
//- get the balance (this function should display the current balance of the user)
//- exit (this function should close the window)
// create interactive menu using alerts
// 90 mins



let main = document.getElementById('atm');
let depositValue = document.getElementById('atm').children[8];
console.log(depositValue);

let depositBtn = document.getElementById('atm').children[11];
console.log(depositBtn);

let withdrawValue = document.getElementById('atm').children[17];
console.log(withdrawValue);

let withdrawBtn = document.getElementById('atm').children[20];
console.log(withdrawBtn);

let checkB = document.getElementById('atm').children[23];
console.log(checkB);

let exitB =document.getElementById('atm').children[26];

let balance = 350;

function makeDeposit(balanceNew, addMoney){
    let result1= balanceNew + addMoney;
    console.log(result1);
    
    balance = result1;
    console.log(`new balance is ${balance}`)
    alert(`Current balance: ${result1} dollars`);

}



depositBtn.addEventListener('click', function(){
    console.log('im working');
    let depositInput = depositValue.value;

    makeDeposit(balance, parseInt(depositInput));
    depositValue.value = "";
    

});




function makeWithdrawal (balanceNew, extractMoney){

    if(extractMoney > balanceNew){
        alert('Not enough money, please try again!')
    } else {
        let result2 = balanceNew - extractMoney;
        console.log(result2);
        balance = result2;
        alert(`Current balance: ${result2} dollars`);
    }
    
}


withdrawBtn.addEventListener('click', function(){
    
    let withdrawInput = withdrawValue.value;

    makeWithdrawal(balance, parseInt(withdrawInput));
    withdrawValue.value = "";
});



function checkBalance (balance){
    alert(`Current Balance is: ${balance} dollars!`)
};

checkB.addEventListener('click', function(){
    checkBalance(balance);
});



function exitAtm (element){
    element.innerHTML = "";
    element.innerHTML = `<h1>Have a good day!</h1>`;
};


exitB.addEventListener('click', function(){
    exitAtm(main);
})


