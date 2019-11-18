const  Upgrades = require("./upgrades") 
class Board{
  constructor(gameDiv) {
  this.money = 1
  this.count = 99
  this.inc = 1
  this.gameDivR = gameDiv
  }


makeButton(){
  console.log(this)
  let innerButton = document.createElement('div')
  let buttonDiv = document.getElementById("buttons")
  innerButton.innerHTML = "click_me"
  innerButton.className = "duckButton"
  innerButton.addEventListener('click', () =>  {
    this.money = this.money + this.inc
    this.renderMoney()
  }, false);
 return buttonDiv.appendChild( innerButton)
}

renderMoney(){
  let moneyCount = document.getElementById('money')
  moneyCount.innerHTML = this.money
}

start() {
  this.renderMoney()
  this.makeButton()
  const Uper = new Upgrades(this)
  this.Uper = Uper
  Uper.start()
}
}

module.exports = Board;