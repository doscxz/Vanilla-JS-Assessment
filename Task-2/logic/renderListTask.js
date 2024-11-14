import { listTask } from "./db.js"

const list = document.querySelector('.list')

const buttonAdd = document.querySelector('.addTaskButt')
buttonAdd.addEventListener('click', () => renderList())


renderList()
// вызывается что бы подгрузилась 1 такса с db.json
function renderList() {
  const ul = document.createElement('ul')
  const li = document.createElement('li')

  const div = document.createElement('div')

  div.textContent = 'x'
  div.classList.add('close')
  // div.addEventListener('click', () => deleteTask())
  // Неполучилось добавить функцию удаление не хвататет знаний как сделать на чистом js 
  // с использованием json-server можно было бы сделать 
  // function deleteTask() {
  //   const task = div.previousElementSibling
  //   const text = task.innerHTML
  //   const s = listTask.indexOf(text)
  //   console.log(s);
  // }

  listTask.map(task => {
    li.textContent = task.text
    list.append(ul)
    ul.append(li)
    ul.append(div)
  })
}
