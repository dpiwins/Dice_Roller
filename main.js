const dieRolls = []
const rollButton = document.querySelector('.Roll')
const numDiceElement = document.querySelector('#numofdice')
const totalDice = document.querySelector('#Total')
const showAllRolls = document.querySelector('.ShowAllRolls')
const rollsOL = document.querySelector('.AllRolls')


rollButton.addEventListener('click', function () {

  
  const numofDice = numDiceElement.value
  let counter = 1
  let sum = 0
  while (counter <= numofDice) {
    const diceValue = Math.floor(Math.random() * 6) + 1
    dieRolls.push(diceValue)
    sum += diceValue
    counter += 1
  }
  totalDice.innerHTML = sum
})

showAllRolls.addEventListener('click', function () {
  let position = 0
  while (position < dieRolls.length) {
    const numberRolled = dieRolls[position]
    rollsOL.innerHTML += '<li><span>' + numberRolled + '</span></li>'
    position += 1
  }
})
