/*let numbers = [-2,-5,-4,0,"Mria", 10,25,120];*/
/*let maxNumber =Math.max(...numbers);
console.log("Max number is :" +maxNumber );*/

/*function getMaxNumber() {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    console.log("Найбільше  число: " + max);
  }
  getMaxNumber();*/

  /*numbers.sort((a, b) => a - b); // сортировка по возрастанию
      console.log(numbers);
      let numberMax = numbers[numbers.length - 1];
      console.log(numberMax);*/

     /* numbers.sort((a, b) => b - a); // сортировка по убыванию
      console.log(numbers);
      let numberMax = numbers[0];
      console.log(numberMax);*/

     /* function getMaxNumber() {
        let numbers = [-5, -2, -6, 0, -1, "string",25 ,100];
        let max = null;

        for (let i = 0; i < numbers.length; i++) {
          if (typeof numbers[i] === "number") {
            if (max === null || numbers[i] > max) {
              max = numbers[i];
            }
          }
        }

        if (max !== null) {
          alert("Самое большое число: " + max);
          console.log("Самое большое число: " + max);
        } else {
          alert("В массиве нет чисел.");
        }
      }

      getMaxNumber();*/

      /*task 71*/
      let numbers = [];
      for (let i = 0; i <= 15; i++) {
        if (i === 0) {
          console.log(i + " - It is zero");
        } else if (i % 2 === 0) {
          console.log(i + " - четное число");
        } else {
          console.log(i + " - нечетное число");
        }
      }
