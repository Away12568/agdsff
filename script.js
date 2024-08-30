const qu1 = prompt ('введите ссылку на картинку')
const qu2 = prompt ('введите ссылку на картинку')
const qu3 = prompt ('введите имя')
const qu4 = prompt ('введите Фамилию')
const qu5 = prompt ('введите возраст')




const box = document.createElement('div')
const photo = document.createElement('img')
const photo2 = document.createElement('img')
const name = document.createElement('h1')
const surname = document.createElement('h2')
const age = document.createElement('h3')
const yes = document.createElement('button1')
const no = document.createElement('button2')

photo.src = qu1
photo2.src = qu2
name.innerText = qu3
surname.innerText = qu4
age.innerText = qu5

// body.append(name)
box.append(photo)
box.append(photo2)
box.append(name)
box.append(surname)
box.append(age)


console.log(box)

const body = document.querySelector('body')
body.append(box)


box.classList = 'box'
photo.style.width = '100px'
photo2.style.width = '100px'
box.style.border = '1px'
box.style.width = '100px'
box.style.margin = '0 auto'
