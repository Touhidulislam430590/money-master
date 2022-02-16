// function for check and get input field 
document.getElementById('calculate').addEventListener('click', function(){
    const income = document.getElementById('income-field').value;
    let incomeNumber = 0;
    if (isNaN(income) || income < 0) {
        alert('Please, Input your real income.')
        document.getElementById('income-field').value = '';
    }
    else{
        incomeNumber = parseFloat(income);
    }


    const food = document.getElementById('food-field').value;
    let foodExpense = 0;
    if (isNaN(food) == true || food < 0) {
        alert('Please, Input your real food expense.')
        document.getElementById('food-field').value = '';
    }
    else{
        foodExpense = parseFloat(food);
    }


    const rent = document.getElementById('rent-field').value;
    let rentExpense = 0;
    if (isNaN(rent) || rent < 0) {
        alert('Please, Input your real rent expense.')
        document.getElementById('rent-field').value = '';
    }
    else{
        rentExpense = parseFloat(rent);
    }


    const clothes = document.getElementById('clothes-field').value;
    let clothesExpense = 0;
    if (isNaN(clothes) == true || clothes < 0) {
        alert('Please, Input your real clothes expense.')
        document.getElementById('clothes-field').value = '';
    }
    else{
        clothesExpense = parseFloat(clothes);
    }

    const total = totalExpenses(foodExpense, rentExpense, clothesExpense);

    
    const availableBalance = incomeNumber - total;
    if (availableBalance < 0) {
        alert('Your expense is more high than your income');
        document.getElementById('total-expense').innerText = '';
    }
    else{
        document.getElementById('available-balance').innerText = availableBalance;
        document.getElementById('total-expense').innerText = total;
    }
})

// function for add expense value
function totalExpenses(fExpense, rExpense, cExpense) {
    const total = fExpense + rExpense + cExpense;
    return total;
}

// calculate savings function 
document.getElementById('savings').addEventListener('click', function() {
    const income = document.getElementById('income-field').value;
    const percent = parseInt(document.getElementById('parcentage-value').value);
    const savingsAmount = (income / 100) * percent;
    const balance = parseFloat(document.getElementById('available-balance').innerText);
    if (savingsAmount > balance) {
        alert('you can not save it');
        document.getElementById('parcentage-value').value = '';
        document.getElementById('save-amount').innerText = '';
        document.getElementById('remain-Balance').innerText = '';
    }else{
        document.getElementById('save-amount').innerText = savingsAmount;
        document.getElementById('remain-Balance').innerText = balance - savingsAmount;
    }

})