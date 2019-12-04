// Selectors
const UIjarWeight = document.getElementById('coinweight')
const UIpennyInput = document.getElementById('pennycount');
const UInickelInput = document.getElementById('nickelcount');
const UIdimeInput = document.getElementById('dimecount');
const UIquarterInput = document.getElementById('quartercount');
const UIdollarOutput = document.getElementById('calculated');
const UIcalculateButton = document.getElementById('calculate-button')

// Add Event Listeners
UIcalculateButton.addEventListener('click', printSum)


// Functions
function printSum(){
  let sum = 0;
  let weight = 0;
  let totalJarWeight = parseFloat(UIjarWeight.value) * 453.592;
  const coins = {
    //    Weight--cent amount--input Value   
    'penny': [2.5, 1, parseInt(UIpennyInput.value)],
    'nickel': [5, 5, parseInt(UInickelInput.value)],
    'dime': [2.268, 10, parseInt(UIdimeInput.value)],
    'quarter': [5.67, 25, parseInt(UIquarterInput.value)],
  }

  for(let key in coins){
    sum += coins[key][1] * coins[key][2];
  }

  for(let key in coins){
    weight += coins[key][0] * coins[key][2];
  }

  UIdollarOutput.innerText = `$${((sum / 100 / weight) * totalJarWeight).toFixed(2)}`
}

