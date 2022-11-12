function calculatorLove() {
    male_name = prompt("Введите имя мальчика");
    female_name = prompt("Введите имя девочки");


    random_number = Math.round((Math.random(0, 100) * 100), 0);

    alert(`${male_name} подходит к ${female_name} на ${random_number}%`);
}

function calculatorBMI() {
    weight = prompt("Введите вес");
    height = prompt("Введите рост");

    bmi = weight / (height * height);

    alert(`Ваш индекс массы тела: ${bmi}`);
}

function leapYearOrNot() {
    year = prompt("Введите год");

    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        alert("Високосный год");
    } else {
        alert("Не високосный год");
    }
}

function WhoPaysForDinner() {
    names = prompt("Введите имена через запятую");

    names = names.split(",");

    random_number = Math.round((Math.random(0, names.length) * names.length), 0);

    alert(`${names[random_number]} платит за ужин`);
}