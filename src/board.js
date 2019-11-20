const  Upgrades = require("./upgrades") 
const AutoQuack = require("./auto_quacks")
const DuckNorris = require("./duck_norris")
const Ducks = require("./ducks")
class Board{
  constructor(gameDiv) {
  this.money = 0
  this.tick = 1000
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
  let QuackSound = document.getElementById("QuackSound")
  innerButton.addEventListener("click", () =>  {
    this.money = this.money + this.inc
    this.renderMoney()
    QuackSound.play();
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
  const DucksL = new Ducks (this)
  this.Uper = Uper
  this.Auto = Auto
  this.DuckN = DuckN
  this.DucksL = Ducks
  this.makeButton()
  this.renderMoney()
  Uper.start()
  Auto.start()
  DucksL.start()
  
  this.story()
}
}

module.exports = Board;