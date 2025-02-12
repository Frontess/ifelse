// if (условие) {тот код что будет выполнено если условие выполняется}
//=== это сравнение равенство жесткое
// && оператор и || оператор или

// получить возраст
function getAge(year) {
  let result = 2024 - year;

  if (result >= 18) {
    return `${result} (совершеннолетний)`;
  }

  return result;
}

// создать список
function getStudentsListUl() {
  let ul = document.createElement("ul");
  return ul;
}

// создать элемент студента
function getStudentLi(index, name, year, height) {
  let li = document.createElement("li");
  let textSpan = document.createElement("span");

  textSpan.textContent = `${index}) ${name}, год рождения: ${year}, возраст ${getAge(
    year
  )}, рост: ${height}`;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Удалить";

  removeBtn.onclick = function () {
    li.remove(); // удалить элемент
  };

  let checkHeightBtn = document.createElement("button");
  checkHeightBtn.textContent = "Проверить";

  checkHeightBtn.onclick = function () {
    if (year >= 2001 && height >= 175) {
      textSpan.classList.add("success");
      textSpan.textContent = `${textSpan.textContent} (отбор пройден)`;
    }
  };

  li.append(textSpan, checkHeightBtn, removeBtn);

  return li;
}

// создать блок добавления
function getAddStudentBlock() {
  let counter = 0;
  let box = document.createElement("div");

  let nameInp = document.createElement("input");
  nameInp.placeholder = "Имя";
  nameInp.type = "text";

  let yearInp = document.createElement("input");
  yearInp.placeholder = "Год рождения";
  yearInp.type = "number";

  let heightInp = document.createElement("input");
  heightInp.placeholder = "Рост";
  heightInp.type = "number";

  let addBtn = document.createElement("button");
  addBtn.textContent = "Добавить";

  addBtn.onclick = function () {
    counter++;
    //взять значение из текстового поля
    let nameValue = nameInp.value;
    let yearValue = Number(yearInp.value);
    let heightValue = Number(heightInp.value);

    let newStudent = getStudentLi(counter, nameValue, yearValue, heightValue);
    studentsListUl.append(newStudent);

    //очистить поля
    nameInp.value = "";
    yearInp.value = "";
    heightInp.value = "";
  };

  box.append(nameInp, yearInp, heightInp, addBtn);

  return box;
}

let addStudentBlock = getAddStudentBlock();

let studentsListUl = getStudentsListUl();

document.body.append(addStudentBlock, studentsListUl);
