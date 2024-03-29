class ArrayUtilities {
    static addZeros = numbers => numbers.map(number => number * 10);
    static moreThanFifty = numbers => numbers.filter(number => number > 50);
    static removeFirst = ([, ...rest]) => rest;
    static sumAll = numbers => numbers.reduce((sum, number) => sum + number);
    static divide = number => `${number}`.split("");
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const addZeros = ArrayUtilities.addZeros(numbers);
  console.log(addZeros);
  
  const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
  console.log(moreThanFifty);
  
  const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
  console.log(noFirst);
  
  const sumAll = ArrayUtilities.sumAll(noFirst);
  console.log(sumAll);
  
  const divided = ArrayUtilities.divide(sumAll);
  console.log(divided);
  