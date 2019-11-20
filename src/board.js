const  Upgrades = require("./upgrades") 
const AutoQuack = require("./auto_quacks")
class Board{
  constructor(gameDiv) {
  this.money = 100
  this.count = 99
  this.inc = .5
  this.gameDivR = gameDiv
  this.unlocks = []
  }
  renderMoney() {
    let moneyCount = document.getElementById('money')
    moneyCount.innerHTML = this.money.toFixed(2)
    this.Uper.priceCheck()
    this.Auto.priceCheck()
  }

makeButton(){
  let innerButton = document.getElementById("duck")
  innerButton.addEventListener('click', () =>  {
    this.money = this.money + this.inc
    this.renderMoney()
  }, false);
}



start() {
  
  const Uper = new Upgrades(this)
  const Auto = new AutoQuack(this)
  this.Uper = Uper
  this.Auto = Auto
  this.makeButton()
  this.renderMoney()
  Uper.start()
  Auto.start()
}
}

module.exports = Board;