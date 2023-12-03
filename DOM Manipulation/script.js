console.log('Hello')

let title = document.getElementById('title')


console.log(title.innerText)

let message = "good"

title.innerText = message

console.log('after', title.innerText)

title.innerHTML = '<p>Hello</p>'

title.style.color = 'red'

// const redDiv = document.getElementById('red')
// const yellowDiv = document.getElementById('yellow')
// const greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')



const squares = document.querySelectorAll('.colorSquare')  
const timesClicked = {'red': 0, 'yellow':0, 'green': 0}

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
})



function clearScore() {
    timesClicked['red'] = 0
    timesClicked['yellow'] = 0
    timesClicked['green'] = 0
    squares.forEach(square => square.innerText = 0)
}

const clearGameDiv = document.getElementById('clear-game')
clearGameDiv.onclick = () => clearScore()

