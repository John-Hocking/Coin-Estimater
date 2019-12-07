// Selectors
const UIjarWeight = document.getElementById('coinweight')
const UIpennyInput = document.getElementById('pennycount');
const UInickelInput = document.getElementById('nickelcount');
const UIdimeInput = document.getElementById('dimecount');
const UIquarterInput = document.getElementById('quartercount');
const UIdollarOutput = document.getElementById('calculated');
const UIcalculateButton = document.getElementById('calculate-button')
const UIresetButton = document.getElementById('reset');

UIresetButton.addEventListener('click', clearAll)
UIcalculateButton.addEventListener('click', printSum)



function printSum(){
  if(UIjarWeight.value === '') {
    return UIdollarOutput.innerText = 'Please enter the weight of the coin jar'
  }
  let sum = 0;
  let weight = 0;
  let totaljarWeight = parseFloat(UIjarWeight.value) * 453.592;
  const coins = {
    //    Weight--cent amount--coin amount input Value   
    'penny': [2.5, 1, parseInt(UIpennyInput.value)],
    'nickel': [5, 5, parseInt(UInickelInput.value)],
    'dime': [2.268, 10, parseInt(UIdimeInput.value)],
    'quarter': [5.67, 25, parseInt(UIquarterInput.value)],
  }

  for(let key in coins){
    if(isNaN(coins[key][2])){
      coins[key][2] = 0;
    }
    sum += coins[key][1] * coins[key][2];
    weight += coins[key][0] * coins[key][2];
  }

  if(weight > totaljarWeight){
    return UIdollarOutput.innerText = "Your handful can't be greater then the jar."
  }

  UIdollarOutput.innerText = (sum != 0 ? 
    `$${((sum / 100 / weight) * totaljarWeight).toFixed(2)}` :
     'Please enter the number of coins in your handful')
}

function clearAll(){
 UIjarWeight.value = '';
 UIpennyInput.value = '';
 UInickelInput.value = '';
 UIdimeInput.value = '';
 UIquarterInput.value = '';
 UIdollarOutput.value = '';
}