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
  this.clicks = 0
  this.gameDivR = gameDiv
  this.unlocks = []
  }
  renderMoney() {
    let moneyCount = document.getElementById('money')
    moneyCount.innerHTML = this.money.toFixed(2)
    this.Uper.priceCheck()
    this.Auto.priceCheck()
    this.TickL.priceCheck()
    this.DucksL.moneyCheck()
  }

  upgradeMulti(){
    this.Auto.QPSCalc()
  }

makeButton(){
  let duck = document.getElementById("duck")
  let QuackSound = document.getElementById("QuackSound")
  let unlock = document.getElementById('unlocks')
  duck.addEventListener("click", () =>  {
    this.money = this.money + this.inc
    this.clicks += 1
    this.renderMoney()
    QuackSound.play();
    if(this.clicks === 3){
      duck.classList = duck.classList = "duckButton gooseHonk"
      unlock.innerHTML = "Duck Duck Goose";
      this.unlocks.push("HONNNNK")
      unlock.classList.add("unlocked");
      setTimeout(() => {
        unlock.classList.remove("unlocked");
        unlock.innerHTML = "hide Quick";
      }, 1000)
    }
  });
}



muteStory(){
  let storyMute = document.getElementById("storyMute")
  let QuackSound = document.getElementById("QuackSound")
  let HonkSound = document.getElementById("HonkSound")
  let caughtSound = document.getElementById('GotEm')
  let modal = document.getElementById("modalStory");

  storyMute.addEventListener("click", () => {

    QuackSound.muted = true;
    HonkSound.muted = true;
    caughtSound.muted = true;
    modal.classList.add("hidden");
    this.DuckN.start()
   
  })
}

regularStory(){
  let storyRegular = document.getElementById("storyRegular")
  let QuackSound = document.getElementById("QuackSound")
  let HonkSound = document.getElementById("HonkSound")
  let caughtSound = document.getElementById('GotEm')
  let modal = document.getElementById("modalStory");
  
  storyRegular.addEventListener("click", () => {
  
    QuackSound.volume = 0.5;
    HonkSound.volume = 0.5;
    caughtSound.volume = 0.5;
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
    unlocks: this.unlocks,
    clicks: this.clicks
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
  window.localStorage.setItem('quacks', JSON.stringify(honkSave))
}

saveButton(){
  let saveDiv = document.getElementById("saveIcon")
  let saveMessage = document.getElementById("saveDiv")
  saveDiv.addEventListener("click", () => {
    this.save()
    saveMessage.classList.remove("hidden")
    setTimeout(() => {
      saveMessage.classList.add("hidden")
    }, 1000)
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
  this.clicks = boardData.clicks || 0
  const Uper = new Upgrades(this)
  const Auto = new AutoQuack(this)
  const DuckN = new DuckNorris(this)
  const DucksL = new Ducks(this)
  const TickL = new Tick(this)
  this.Uper = Uper
  this.Auto = Auto
  this.DuckN = DuckN
  this.DucksL = DucksL
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
  this.muteStory()
  this.regularStory()
  Uper.start()
  Auto.start()
  DucksL.start()
  TickL.start()
  this.renderMoney()

  
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
  this.DucksL = DucksL
  this.TickL = TickL
  this.saveButton()
  this.makeButton()
  this.resetButton()
  this.muteStory()
  this.regularStory()
  Uper.start()
  Auto.start()
  DucksL.start()
  TickL.start()
  this.renderMoney()

  
}
}

module.exports = Board;