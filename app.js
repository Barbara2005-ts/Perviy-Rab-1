//задача 1
document.body.innerHTML = '<h1>Я JavaScript!</h1>';
//задача 2
let admin;
let name = "Иван";
admin = name;
alert(admin); // Должно показать «Иван» 
//задача 3
let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya
//задача 4
let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);
//задача 5
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
//задача 6
let a = 2;
let x = 1 + (a *= 2); // a = 4, x = 5
//задача 7
let a = +prompt("Первое число?", 1); // Приводим к числу
let b = +prompt("Второе число?", 2); // Приводим к числу
alert(a + b); // Теперь будет 3
//задача 8
console.log(7 > 5); // true
console.log("стол" > "стул"); // true
console.log("4" > "52"); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // 
//задача 9
if ("0") {
    alert('Привет'); // Да, alert выведется
  }
//задача 10
let officialName = prompt("Какое «официальное» название JavaScript?");
if (officialName === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}
//задача 11
let number = prompt("Введите число:");
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}
//задача 12
let result = (a + b < 4) ? 'Мало' : 'Много';
//задача 13
let message = (login == 'Сотрудник') ? 'Привет' :
              (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' : '';
//задача 14
alert(null || 4 || undefined); // 4
//задача 15
alert(alert(1) || 2 || alert(3)); // Сначала выведет 1, затем 2
//задача 16
alert(1 && null && 2); // null
//задача 17
alert(alert(1) && alert(2)); // Сначала выведет 1, затем undefined
//задача 18
alert(null || 2 && 3 || 4); // 3
//задача 19
let value = NaN;
value &&= 10; // value остается NaN
value ||= 20; // value становится 20
value &&= 30; // value остается 20
value ||= 40; // value остается 20
alert(value); // 20
//задача 20
if (age >= 14 && age <= 90) {
    // действия, если age в диапазоне
}
//задача 21
if (!(age >= 17 && age <= 99)) {
    // действия, если age не в диапазоне
}
if (age < 17 || age > 99) {
    // действия, если age не в диапазоне
}
//задача 22
if (-1 || 0) alert('first'); // 'first' (первое выражение true)
if (-1 && 0) alert('second'); // не выполнится (результат false)
if (null || -1 && 1) alert('third'); // 'third' (результат true)
//задача 23









