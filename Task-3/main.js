
const API = 'http://localhost:3000/users/'

// fetch(API)
//   .then(response => response.json())
//   .then(data => console.log(data))

const container = document.querySelector('.container')

async function fetchApi() {
  renderLoading()
  return await new Promise((resolve, reject) => {
    const users = fetch(API)
      .then(e => e.json())


    resolve(users)
  })
}

fetchApi()
  .then(users => renderUsers(users))
  .catch(error => renderError())

function renderLoading() {
  const loading = document.createElement('div')
  loading.id = 'loading'
  loading.textContent = 'Загрузка...'

  container.append(loading)

}

function renderError(error) {
  const div = document.createElement('div')
  div.id = 'loading'
  div.innerText = `${error}`

  container.append(div)
}

function renderUsers(users) {
  const container = document.querySelector('.container')

  const loading = document.querySelector('#loading')
  loading.remove()

  users.forEach(user => {
    const div = document.createElement('div')

    const image = document.createElement('img')
    image.setAttribute('src', `${user.image}`)
    image.setAttribute('alt', `картинка`)

    image.style.display = 'flex';
    image.style.width = '150px';
    image.style.height = '150px';



    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')

    h3.innerHTML = `Имя: ${user.name}`
    h4.innerHTML = `Почта: ${user.email}`

    div.append(image)
    div.append(h3)
    div.append(h4)

    container.append(div)
  });

}