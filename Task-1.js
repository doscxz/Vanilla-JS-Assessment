const str1 = "А роза упала на лапу Азора"
const str2 = "Привет"

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

function isPalindrome(str) {
  const reverse = str.toLowerCase().split('')
  const string = str.toLowerCase().split('')
  /**
   * создаем 2 переменные приводми в нижний регистр и сплитим
   * что бы в дальнейшем убрать пробелы и 1 реверснуть
   */
  reverse.reverse()
  // реверсаем 1 из переменыx
  if (deleteSpaces(reverse).join('') === deleteSpaces(string).join('')) {
    /**
     * здесь вынес функцию которая убирает пробелы, что бы не переписывать по 2 раза
     */
    return true
    // возвращаем true если строчки равны
  } else {
    return false
    // возвращаем false если строчки не равны
  }
}

function deleteSpaces(array) {
  // принимаем 1 из массивов
  for (let i = 0; i < array.length; i++) {
    // пробегаем по его элементам
    if (array[i] === ' ') {
      // и если находим 'пробел' удалаем его
      array.splice(i, 1)

    }
  }
  return array
  // возвращаем получившийся массив
}
