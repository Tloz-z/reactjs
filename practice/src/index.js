const button = document.querySelector("button");

const sayHello = name => console.log(`Hello ${name}`);

button.addEventListener("click" , sayHello);

//-------------------------------------------

const human = {
    name : "Dongil",
    sex : "Male",
    nation : "Korea"
}

const {name , sex : gender , nation } = human;

console.log(name , gender , nation);

//--------------------------------------------

const days = ["mon" , "tue" , "wed"];
const otherDays = ["thu" , "fri" , "sat"];

const allDays = [...days , ...otherDays , "sun"];

console.log(allDays);

// # 1.6-------------------------------------

const numberDays = allDays.map((day , index) => `#${index + 1} ${day}`);

console.log(numberDays);

// # 1.7-------------------------------------

const numbers = [3 , 14, 123, 132, 12, 33, 1 , 3, 4, 5];

const cleanNumbers = numbers.filter(number => number < 15);

console.log(cleanNumbers);

// # 1.8 여러가지 배열 메소드
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
// 위 사이트를 참고