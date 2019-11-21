const  Upgrades = require("./upgrades") 
const AutoQuack = require("./auto_quacks")
const DuckNorris = require("./duck_norris")
const Ducks = require("./ducks")
const Tick = require("./ticks")
class Board{
  constructor(gameDiv) {
  this.money = 0
  this.tick = 1000
  this.inc = .5
  this.multi = 1
  this.gameDivR = gameDiv
  this.unlocks = []
  }
  renderMoney() {
    let moneyCount = document.getElementById('money')
    moneyCount.innerHTML = this.money.toFixed(2)
    this.Uper.priceCheck()
    this.Auto.priceCheck()
    this.TickL.priceCheck()
  }

  upgradeMulti(){
    this.Auto.QPSCalc()
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


save(){
  const boardData = {
    money: this.money,
    tick: this.tick,
    inc: this.inc,
    multi: this.multi,
    unlocks: this.unlocks
  }

  const autoData ={
    ducklingCost: this.Auto.ducklingCost,
    ducklingCount: this.Auto.ducklingCount,
    ducksCount: this.Auto.ducksCount,
    ducksCost: this.Auto.ducksCost
  }

  const upData = {
    crumbCost: this.Uper.crumbCost,
    sliceCost: this.Uper.sliceCost,
    loafCost: this.Uper.loafCost
  }

  const tickData = {
    tickCost: this.TickL.cost || 1001
  }

  const honkSave = {
    boardData: boardData,
    autoData: autoData,
    upData: upData,
    tickData: tickData
  }
  console.log(this.TickL)
  window.localStorage.setItem('quacks', JSON.stringify(honkSave))
}

saveButton(){
  let saveDiv = document.getElementById("saveIcon")
  saveDiv.addEventListener("click", () => {
    this.save()
  })
}

startup(){
  let data = JSON.parse(window.localStorage.getItem('quacks'))

  if(data){
    this.saveStart(data)
  } else{
    this.start()
  }
}

reset(){
  window.localStorage.removeItem('quacks')
}

resetButton(){
  let resetIcon = document.getElementById("trash")
  resetIcon.addEventListener("click", ()=>{
    this.reset()
  })
}

saveStart({boardData, autoData, upData, tickData}){
  this.money = boardData.money
  this.tick = boardData.tick
  this.inc = boardData.inc
  this.multi = boardData.multi
  this.unlocks = boardData.unlocks
  const Uper = new Upgrades(this)
  const Auto = new AutoQuack(this)
  const DuckN = new DuckNorris(this)
  const DucksL = new Ducks(this)
  const TickL = new Tick(this)
  this.Uper = Uper
  this.Auto = Auto
  this.DuckN = DuckN
  this.DucksL = Ducks
  this.TickL = TickL

  this.Uper.crumbCost = upData.crumbCost
  this.Uper.sliceCost = upData.sliceCost
  this.Uper.loafCost = upData.loafCost


  this.Auto.ducklingCost = autoData.ducklingCost
  this.Auto.ducksCost = autoData.ducksCost
  this.Auto.ducksCount = autoData.ducksCount
  this.Auto.ducklingCount = autoData.ducklingCount
  this.TickL.cost = tickData.tickCost

  this.saveButton()
  this.makeButton()
  this.renderMoney()
  Uper.start()
  Auto.start()
  DucksL.start()
  TickL.start()
  this.story()
  this.resetButton()

}


start() {
  
  const Uper = new Upgrades(this)
  const Auto = new AutoQuack(this)
  const DuckN = new DuckNorris(this)
  const DucksL = new Ducks(this)
  const TickL = new Tick(this)
  this.Uper = Uper
  this.Auto = Auto
  this.DuckN = DuckN
  this.DucksL = Ducks
  this.TickL = TickL
  this.saveButton()
  this.makeButton()
  this.resetButton()
  this.renderMoney()
  Uper.start()
  Auto.start()
  DucksL.start()
  TickL.start()
  this.story()
}
}

module.exports = Board;