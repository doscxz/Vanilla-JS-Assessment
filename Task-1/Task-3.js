// можно было reduce использовать но про него я вспомнил когда закончил через метод for

const array = [1, 2, 3, 4, 5, 6, 7, 8]
chunkArray(array, 2)
function chunkArray(array, size) {
  const newArray = []
  // создаем переменную куда будем складвыть нарезаные массивы
  for (let i = 0; i < array.length; i + size) {
    newArray.push(array.splice(i, size))
    // вырезаем массив и сразу пушим в новый массив
  }
  console.log(newArray);
}
