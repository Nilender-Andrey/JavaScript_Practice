const buttons = document.querySelector('.buttons');
const screen = document.querySelector('.calc-screen p');

let firstNumber = '';
let secondNumber = '';
let sign = '';
let isFirstNumber = true;

buttons.addEventListener('click', buttonsClickHandler);

function buttonsClickHandler(event) {
  const target = event.target;
  screen.textContent = '';

  let content = '';

  if (target.classList.contains('num')) {
    if (isFirstNumber) {
      firstNumber = addingNumbers(firstNumber, target.textContent);
      content = firstNumber;
    } else {
      secondNumber = addingNumbers(secondNumber, target.textContent);
      content = secondNumber;
    }
  }

  if (target.classList.contains('math-action')) {
    sign = target.textContent;
    content = sign;
    secondNumber = '';
    isFirstNumber = false;
  }

  if (target.classList.contains('result')) {
    firstNumber = actions();
    content = firstNumber;
  }

  if (target.classList.contains('ca')) {
    clearAll();
    content = 0;
  }

  render(content);

  console.log('firstNumber', firstNumber);
  console.log('secondNumber', secondNumber);
  console.log('sign', sign);
}

function actions() {
  if (!secondNumber) secondNumber = firstNumber;
  switch (sign) {
    case '/':
      return firstNumber / secondNumber;

    case 'X':
      return firstNumber * secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '+':
      return +firstNumber + +secondNumber;

    default:
      return firstNumber;
  }
}

function render(content) {
  screen.textContent = content;
}

function addingNumbers(value, symbol) {
  if (
    (value.includes('.') && symbol === '.') ||
    value.length >= 9 ||
    (value === '0' && symbol === '0')
  )
    return value;
  return (value += symbol);
}

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  sign = '';
  isFirstNumber = true;
}
