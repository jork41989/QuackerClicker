const  Upgrades = require("./upgrades") 
const AutoQuack = require("./auto_quacks")
const DuckNorris = require("./duck_norris")
class Board{
  constructor(gameDiv) {
  this.money = 0
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
  innerButton.addEventListener("click", () =>  {
    this.money = this.money + this.inc
    this.renderMoney()
  });
}

story(){
  let modal = document.getElementById("modalStory");
  modal.addEventListener("click", () => {
    modal.classList.add("hidden");
    this.DuckN.start()
  })
 
}


start() {
  
  const Uper = new Upgrades(this)
  const Auto = new AutoQuack(this)
  const DuckN = new DuckNorris(this)
  this.Uper = Uper
  this.Auto = Auto
  this.DuckN = DuckN
  this.makeButton()
  this.renderMoney()
  Uper.start()
  Auto.start()
  
  this.story()
}
}

module.exports = Board;