import { listTask } from "./db.js"


const input = document.querySelector('input')

const addTaskButt = document.querySelector('.addTaskButt')
addTaskButt.addEventListener('click', addListTask())
function addListTask(e) {
  input.addEventListener('change', (e) => {
    const value = e.target.value
    listTask.push({
      text: value
    })
  })
}