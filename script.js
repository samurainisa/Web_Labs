b = 2
a = 18
console.log(a + b);

function toHighCase(str) {
    return str.toUpperCase();
}

function toLowCase(str) {
    return str.toLowerCase();
}

console.log(toHighCase('Hello World'));
console.log(toLowCase('Hello World'));

//реализации базовых операций над числами
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function pow(a, b) {
    return a ** b;
}

function mod(a, b) {
    return a % b;
}

console.log("Сложение", add(b, a));
console.log("Вычитание", sub(b, a));
console.log("Умножение", mul(b, a));
console.log("Деление", div(b, a));
console.log("Возведение в степень", pow(b, a));
console.log("Остаток от деления", mod(b, a));

//реализация функции, которая принимает на входе строку и возвращает строку-перевертыш
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello World"));

//реализация функции, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа   
function getCodeStringFromText(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i) + " ";
    }
    return result;
}

console.log(getCodeStringFromText("Hello World"));