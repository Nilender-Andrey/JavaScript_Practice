/* 
Емейл представляется одним из способов:
Volodimir Singapuk <singapuk.e03@gmail.com>
singapuk.e03@gmail.com
Необходимо получить емейл в сокращенном виде
 */

// 1 Методами строк:
const str1 = 'Volodimir Singapuk <singapuk.e03@gmail.com>';
const str2 = 'singapuk.e03@gmail.com';

const trimEmail = (email) => {
  let index = email.indexOf('<');

  if (index !== -1) {
    return email.substring(index + 1, email.length - 1);
  }

  return email;
};

console.log(trimEmail(str1));
console.log(trimEmail(str2));

// 2 Регулярным выражением:

const trimEmail2 = (email) => {
  const regexp = /(?<=\<)(\S+)(?=\>)/g;
  const matches = email.match(regexp);
  return matches ? matches[0] : email;
};

console.log(trimEmail2(str1));
console.log(trimEmail2(str2));
