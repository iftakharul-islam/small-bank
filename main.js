const loginBtn = document.getElementById("login")
const email = document.getElementById("email")
const password = document.getElementById("password")


const loginArea = document.getElementById("login-area")
const bankArea = document.getElementById("bank-area")



loginBtn.addEventListener('click', login)
function login(){
    if((email.value == "gpifat123@gmail.com") && 
        (password.value == "123")){
        alert("logged In")
        loginArea.style.display = "none"

    }else{
        alert("Email or Password Not Matched")
    }
}

const addDeposit = document.getElementById("add-deposit")
const addWithdraw = document.getElementById("add-withdraw")

let total = document.getElementById("total")
let withdraw = document.getElementById("withdraw")
let deposit = document.getElementById("deposit")

let totalBalance = 0;
let totalDeposit = 0;
let totalWithdraw = 0;

let withdrawValue = document.getElementById("withdraw-value")
let depositValue = document.getElementById("deposit-value")

addDeposit.addEventListener('click',function(){
    totalDeposit+=parseInt(depositValue.value)
    totalBalance+=parseInt(depositValue.value)
    total.innerHTML = "$"+totalBalance;
    deposit.innerHTML = "$"+totalDeposit;
    console.log("Total Deposit = ",totalDeposit, "Total Balance = ",totalBalance)
})

addWithdraw.addEventListener('click',function(){
    totalWithdraw+=parseInt(withdrawValue.value)
    totalBalance-=parseInt(withdrawValue.value)
    total.innerHTML = "$"+totalBalance;
    withdraw.innerHTML = "$"+totalWithdraw;
    console.log("Total Withdraw = ",totalWithdraw,"Total Balance = ",totalBalance)
})














// function changeColor(val)
// {
//     bankArea.style.backgroundColor = val
// }



