//Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов
const list = document.querySelector(".list");

const listContainer = document.querySelector(".list-container");
listContainer.textContent = "Анализ оценок студентов";
list.appendChild(listContainer);

const grades = [];

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
grades.push(getRandomInt(100));
console.log(grades);

//средний балл студентов
const sum =
  grades[0] +
  grades[1] +
  grades[2] +
  grades[3] +
  grades[4] +
  grades[5] +
  grades[6] +
  grades[7] +
  grades[8] +
  grades[9] +
  grades[10] +
  grades[11];

const average = Math.floor(sum / grades.length);
console.log("Средняя оценка:" + average);

//максимальный балл среди студентов
const max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
console.log("max", max([...grades]));

//минимальный балл среди студентов
const min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};
console.log("min", min([...grades]));

//количество студентов, получивших положительную оценку (балл выше или равен 60)
const positiveGrades = grades.filter(function (number) {
  if (number >= 60) return 1;
});
console.log(positiveGrades.length);

//количество студентов, получивших отрицательную оценку (балл ниже 60)
const negativeGrades = grades.filter(function (number) {
  if (number < 60) return 1;
});
console.log(negativeGrades.length);

//Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E
//от 80 до 100, преобразуйте её в "A"
//от 60 до 79, преобразуйте её в "B"
//от 40 до 59, преобразуйте её в "C"
//от 20 до 39, преобразуйте её в "D"
//ниже 20, преобразуйте её в "E"
const letterGrades = grades.map(function (number) {
  if (number >= 80) {
    return "A";
  }
  if (number >= 60 && number <= 79) {
    return "B";
  }
  if (number >= 40 && number <= 59) {
    return "C";
  }
  if (number >= 20 && number <= 39) {
    return "D";
  }
  if (number < 20) {
    return "E";
  }
});
console.log(letterGrades);

const listItem1 = document.querySelector("#listItem1");
listItem1.textContent = `Оценки студентов: ${grades}`;
listContainer.appendChild(listItem1);

const listItem2 = document.querySelector("#listItem2");
listItem2.textContent = `Средний балл студентов: ${average}`;
listContainer.appendChild(listItem2);

const listItem3 = document.querySelector("#listItem3");
listItem3.textContent = `Максимальный балл среди студентов: ${max([
  ...grades,
])}`;
listContainer.appendChild(listItem3);

const listItem4 = document.querySelector("#listItem4");
listItem4.textContent = `Минимальный балл среди студентов: ${min([...grades])}`;
listContainer.appendChild(listItem4);

const listItem5 = document.querySelector("#listItem5");
listItem5.textContent = `Количество студентов, получивших положительную оценку: ${positiveGrades.length}`;
listContainer.appendChild(listItem5);

const listItem6 = document.querySelector("#listItem6");
listItem6.textContent = `Количество студентов, получивших отрицательную оценку: ${negativeGrades.length}`;
listContainer.appendChild(listItem6);

const listItem7 = document.querySelector("#listItem7");
listItem7.textContent = `Преобразование числовых оценок в формат буквенных оценок A/B/C/D/E: ${letterGrades}`;
listContainer.appendChild(listItem7);
