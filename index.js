const operatorsNumbers = [
  {
    name: "one",
    character: 1
  },
  {
    name: "two",
    character: 2
  },
  {
    name: "three",
    character: 3
  },
  {
    name: "four",
    character: 4
  },
  {
    name: "five",
    character: 5
  },
  {
    name: "six",
    character: 6
  },
  {
    name: "seven",
    character: 7
  },
  {
    name: "eight",
    character: 8
  },
  {
    name: "nine",
    character: 9
  },
  {
    name: "zero",
    character: 0
  },
  {
    name: "plus",
    character: '+'
  },
  {
    name: "minus",
    character: '-'
  },
  {
    name: "percentage",
    character: '%'
  },
  {
    name: "multiplication",
    character: '*'
  },
  {
    name: "division",
    character: '/'
  },
  {
    name: "decimal",
    character: '.'
  },
]

// const operations = [
//   {
//     operator: '+',
//     operation: (a, b) => a + b 
//   },
//   {
//     operator: '-',
//     operation: (a, b) => a - b 
//   },
//   {
//     operator: '*',
//     operation: (a, b) => a * b 
//   },
//   {
//     operator: '/',
//     operation: (a, b) => a / b 
//   }
// ]


const padElement = document.querySelector('#pad');
const calculationInput = document.querySelector("#calculationInput")

padElement.addEventListener('click', function (e) {
  const pressedButton = e.target.getAttribute("name")

  if (!pressedButton) {
    return;
  }

  if (pressedButton == 'equal') {
    calculate()
    return;
  }

  if (pressedButton == 'clear') {
    clear()
    return;
  }

  if (pressedButton == 'addSub') {
    return;
  }
  
  // argumento = passa valor 
  pressCalculatorButton(pressedButton)
})

// parametro = recebe valor / receptor
// parametro não puxa valor do argumento, ele só recebe
function pressCalculatorButton(pressedButton) {
  // op é um nome inventado para cada um dos itens dentro do operatorsNumbers
  const operatorNumber = operatorsNumbers.find(op => op.name == pressedButton)

  calculationInput.value += operatorNumber.character
}

function clear() {
  calculationInput.value = ''
}

function calculate() {
  let formula = calculationInput.value

  formula = formula.replaceAll('%', '/100')

  const result = eval(formula)

  calculationInput.value = result
}