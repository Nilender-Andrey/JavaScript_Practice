const select1 = document.querySelector('.select-1');

// 1. Получение значения

// 1.a Стрелочная функция:
/* 
select1.onchange = () => {
  const item = select1.value;
  console.log(item);
};

select1.addEventListener('change', () => {
  const item = select1.value;
  console.log(item);
});
 */

// 1.b Анонимная функция:
/* 
select1.onchange = function () {
  console.log(this.value);
};

select1.addEventListener('change', function () {
  console.log(this.value);
});
 */

// 2. Получить текст из option
select1.addEventListener('change', function () {
  // Index выбранного элемента (отсчет с 0)
  const index = select1.selectedIndex;
  console.log(index);

  // Получаем все option
  const options = select1.options;
  console.log(options);

  // Получаем выбранную option
  console.log(options[index]);

  // Получаем текст
  console.log(options[index].textContent);

  // Получаем значение(для информации)
  console.log(options[index].value);
});

// 4. Порядок и создание

/*
если ключ начинается со строчного символа, выводится по порядку как в объекте
если ключ можно привести к числу, то в порядке возрастания числа
 */
const city = {
  id_111: 'Москва',
  id_333: 'Питер',
  id_222: 'Самара',
};

const container = document.querySelector('.container');
const select3 = document.createElement('select');

for (let id in city) {
  const option = document.createElement('option');
  option.value = id;
  option.text = city[id];

  select3.append(option);
}

container.append(select3);
container.append(document.createElement('hr'));

// 5. Полное управление порядком и созданием

const city2 = [
  { id: 111, city: 'Москва' },
  { id: 333, city: 'Питер', selected: true },
  { id: 222, city: 'Самара' },
];

const select4 = document.createElement('select');

city2.forEach((item) => {
  const option = document.createElement('option');
  option.value = item.id;
  option.text = item.city;

  if (item.selected) {
    option.selected = true;
  }

  select4.append(option);
});

container.append(select4);
