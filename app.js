// Coin Weights in grams
const penny = 2.5;
const nickel = 5;
const dime = 2.268;
const quarter = 5.67

// How many coins fit inside each wrapper
// const pennyCount = 50;
// const nickelCount = 40;
// const dimeCount = 50;
// const quarterCount = 40;


// Selectors
const totalWeight = document.getElementById('coinweight')
const pennyInput = document.getElementById('pennycount');
const nickelInput = document.getElementById('nickelcount');
const dimeInput = document.getElementById('dimecount');
const quarterInput = document.getElementById('quartercount');
const dollarOutput = document.getElementById('calculated');
const calculateButton = document.getElementById('calculate-button')


const coins = {
  'penny': [2.5, 1, 12],
  'nickel': [5, 5, pennyInput.value],
  'dime': [2.268, 10, pennyInput.value],
  'quarter': [5.67, 25, pennyInput.value],
}


// Add Event Listeners
calculateButton.addEventListener('click', printSum)

function printSum(){
  let sum = parseInt(pennyInput.value) * 1 + parseInt(nickelInput.value) * 5 + parseInt(dimeInput.value) * 10 + parseInt(quarterInput.value) * 25;
  dollarOutput.innerText = `$${sum/100}`;
}

