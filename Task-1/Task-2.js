function fizzBuzz() {
  const value = Math.round(Math.random() * 100)
  // округляем до целого цисла и приводим рандом от 0 до 100
  if ((value / 3) === (Math.round(value / 3))) {
    // сравнения если кратно 3
    console.log('Fizz');

  } else if ((value / 5) === (Math.round(value / 5))) {
    // сравнения если кратно 5
    console.log("Buzz");

  } else if ((value / 3) === (Math.round(value / 3)) || (value / 5) === (Math.round(value / 5))) {
    // сравнения если кратно и 3, и 5
    console.log("FizzBuzz");

  } else {
    console.log('не кратно ни 3, ни 5');

  }
}
fizzBuzz()
