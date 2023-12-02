console.log('Hello')

let title = document.getElementById('title')


console.log(title.innerText)

let message = "good"

title.innerText = message

console.log('after', title.innerText)

title.innerHTML = '<p>Hello</p>'

title.style.color = 'red'

const redDiv = document.getElementById('red')
const yellowDiv = document.getElementById('yellow')
const greenDiv = document.getElementById('green')

redDiv.onclick = () => console.log('red')
yellowDiv.onclick = () => console.log('yellow')
greenDiv.onclick = () => console.log('green')