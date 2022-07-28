//* присоздании свойства:
//* enumerable: true
//* writable: true
//* configurable: true
const person1 = {
  name: 'Aleksey',
  age: 27,

  get isAdult() {
    return this.age >= 18;
  },
};

/*********************************************************/
//* присоздании свойства:
//* enumerable: false
//* writable: false
//* configurable: false
const person2 = Object.create(Object.prototype, {
  name: {
    value: 'Aleksey',
    enumerable: true, // разрешает||запрещает перебирать свойство ((без него в консоле свойство не отразиться) || можно скрыть от печати установив false)
    writable: true, // разрешает||запрещает изменение свойства
    configurable: true, //  разрешает||запрещает удаление свойства
  },
  age: {
    value: 27,
    enumerable: true,
    writable: true,
    configurable: true,
  },

  isAdult: {
    enumerable: true,
    get() {
      return this.age >= 18;
    },
  },
});

person1.name = 'Dmitry';
person2.name = 'Dmitry';

delete person1.name;
delete person2.name;

// console.log(person1, person2);
// console.log(person1.isAdult, person2.isAdult);

//! манипулируем полями уже созданного объекта */
//* если надо для одного свойства
Object.defineProperty(person1, 'age', { value: 17, writable: false });

person1.age = 20;

console.log(person1);

//* если надо для нескольских свойств
Object.defineProperties(person1, {
  age: { value: 17, writable: true },
  surname: { value: 'Surname', enumerable: true },
});

person1.age = 20;

console.log(person1);

//! получение полей объекта */
//* можно проверить являеся ли свойство get-ром || set-ром

console.log(Object.getOwnPropertyDescriptor(person1, 'surname'));
console.log(Object.getOwnPropertyDescriptor(person1, 'isAdult'));

const des = Object.getOwnPropertyDescriptor(person1, 'isAdult');

console.log(des.hasOwnProperty('isAdult'));
console.log(person1.hasOwnProperty('isAdult'));

//! получение всех дискрипторов объекта */
console.log(Object.getOwnPropertyDescriptors(person1));
