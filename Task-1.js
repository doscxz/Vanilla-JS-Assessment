const str1 = "А роза упала на лапу Азора"
const str2 = "Привет"

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

function isPalindrome(str) {
  const reverse = str.toLowerCase().split('')
  const string = str.toLowerCase().split('')
  // создаем 2 переменные приводим к общему виду
  // создаем 2 т.к. в дальнейшем будем их сравнивать и 1 будет реверснута
  // другая остоваться как есть
  reverse.reverse()
  // реверсаем 1 из переменыx
  if (deleteSpaces(reverse).join('') === deleteSpaces(string).join('')) {
    //здесь решил создать функицю котораю убирает все пробелы что бы сравнение получилось точным
    // вынес ее что бы не переписывать по 2 раза
    return true
    // возвращаем true если строчки равны
  } else {
    return false
    // возвращаем false если строчки не равны
  }
}

function deleteSpaces(array) {
  array.filter(e => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === ' ') {
        array.splice(i, 1)
      }
    }
  })
  return array
}
