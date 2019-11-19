const  Upgrades = require("./upgrades") 
class Board{
  constructor(gameDiv) {
  this.money = 1
  this.count = 99
  this.inc = .5
  this.gameDivR = gameDiv
  }


makeButton(){
  console.log(this)
  let innerButton = document.getElementById("duck")
  innerButton.addEventListener('click', () =>  {
    this.money = this.money + this.inc
    this.renderMoney()
  }, false);
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