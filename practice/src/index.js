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

//------------------------------------------