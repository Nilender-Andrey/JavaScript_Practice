const innerText = document.querySelector('.text-to-check');
const outerText = document.querySelector('.result>pre>code');
const findButton = document.querySelector('.find-btn');

findButton.addEventListener('click', () => {
  const text = innerText.value.trim();
  innerText.value = text;
  if (text === '') return;

  //checkTextTemplateString(text);
  checkTextRegularExpression(text);
});

// Решение 1. Шаблонная строка

function checkTextTemplateString(text) {
  const template =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"№;%:?*()_+-={}[].,;:\'"\\/<> ';

  let outputText = '';

  for (let index = 0; index < text.length; index++) {
    if (template.includes(text[index])) {
      switch (text[index]) {
        case '>':
          outputText += '&#x3E;';
          break;
        case '<':
          outputText += '&#x3C;';
          break;
        default:
          outputText += text[index];
          break;
      }
    } else if (text[index] === '\n') {
      outputText += '<br>';
    } else if (text[index] === '\t') {
      outputText += '&#9;';
    } else {
      outputText += `<mark>${text[index]}</mark>`;
    }
  }

  outerText.innerHTML = outputText;
}

// Решение 2. Шаблонная строка

function checkTextRegularExpression(text) {
  const regexp = /[^\w\s!'"№;%:?*(){}<>\-=\/.,&#@^0]/gi;

  let outputText = text.replace(/\>/g, (str) => '&#x3E;');
  outputText = outputText.replace(/\</g, (srt) => '&#x3C;');
  outputText = outputText.replace(regexp, (symbol) => `<mark>${symbol}</mark>`);

  console.log(outputText);
  outerText.innerHTML = outputText;
}
