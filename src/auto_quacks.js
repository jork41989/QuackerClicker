class AutoQuack {
  constructor(board) {
    this.board = board
    this.ducklingCost = 100
    this.ducklingMPS = 1
    this.ducklingCount = 0
    this.ducksCost = 1000
    this.ducksMPS = 10
    this.ducksCount = 0
    this.duckHorseCost = 10000
    this.duckHorseMPS = 100
    this.duckHorseCount = 0
    this.hidden = false
  }


  DucklingCostRender(){
    let ducklingCostDiv = document.getElementById("ducklingCost")
    if (this.ducklingCost <= 1000000){
      ducklingCostDiv.innerHTML = `Cost: ${this.ducklingCost}`
    } else {
      let costExp = this.ducklingCost.toExponential(2)
      ducklingCostDiv.innerHTML = `Cost: ${costExp}`
    }
  }
  DucksCostRender() {
    let ducksCostDiv = document.getElementById("ducksCost")
    ducksCostDiv.innerHTML = `Cost: ${this.ducksCost}`
  }
  DuckHorseCostRender() {
    let duckHorseCostDiv = document.getElementById("horseSizedDuckCost")
    duckHorseCostDiv.innerHTML = `Cost: ${this.duckHorseCost}`
  }

  
  DucklingCountRender(){
    let ducklingCountDiv = document.getElementById("ducklingCount")
    ducklingCountDiv.innerHTML = `Ducklings: ${this.ducklingCount}`
  }
  DucksCountRender() {
    let ducksCountDiv = document.getElementById("ducksCount")
    ducksCountDiv.innerHTML = `Ducks: ${this.ducksCount}`
  }
  DuckHorseCountRender() {
    let duckHorseCountDiv = document.getElementById("horseSizedDuckCount")
    duckHorseCountDiv.innerHTML = `Ducks: ${this.duckHorseCount}`
  }

  DucklingButton(){
    let ducklingButton = document.getElementById("ducklingButton")
    let ducklingCostL = document.getElementById("ducklingCost")
    ducklingButton.addEventListener("click", () => {
      if(this.board.money >= this.ducklingCost){
        this.board.money = this.board.money - this.ducklingCost
        this.ducklingCost = (this.ducklingCost * 1.2).toFixed(2)
        this.ducklingCount = this.ducklingCount + 1
        this.DucklingCostRender()
        this.DucklingCountRender()
        this.board.renderMoney()
        this.QPSCalc()
        if(this.ducklingCount === 1){
          this.DucklingPS()
        }
      } else{
        ducklingCostL.classList.add("noMoney")
        setTimeout(() => {
          ducklingCostL.classList.remove("noMoney")
        }, 1000)
      }
    })
  }

  DucksButton() {
    let ducksButton = document.getElementById("ducksButton")
    ducksButton.addEventListener("click", () => {
      if (this.board.money >= this.ducksCost) {
        this.board.money = this.board.money - this.ducksCost
        this.ducksCost = (this.ducksCost * 1.2).toFixed(2)
        this.ducksCount = this.ducksCount + 1
        this.DucksCostRender()
        this.DucksCountRender()
        this.board.renderMoney()
        this.QPSCalc()
        if (this.ducksCount === 1) {
          this.DucksPS()
        }
      }
    })
  }
  DuckHorseButton() {
    let duckHorseButton = document.getElementById("horseSizedDuckButton")
    duckHorseButton.addEventListener("click", () => {
      if (this.board.money >= this.duckHorseCost) {
        this.board.money = this.board.money - this.duckHorseCost
        this.duckHorseCost = (this.duckHorseCost * 1.2).toFixed(2)
        this.duckHorseCount = this.duckHorseCount + 1
        this.DuckHorseCostRender()
        this.DuckHorseCountRender()
        this.board.renderMoney()
        this.QPSCalc()
        if (this.duckHorseCount === 1) {
          this.DuckHorsePS()
        }
      }
    })
  }

  DucklingPS(){
    if(this.ducklingCount >= 1){
      setInterval(() =>{
        this.board.money = this.board.money + (this.ducklingCount * this.ducklingMPS)
        this.board.renderMoney()
      }, this.board.tick)
    }
  }

  DucksPS() {
    if (this.ducksCount >= 1) {
      setInterval(() => {
        this.board.money = this.board.money + (this.ducksCount * this.ducksMPS)
        this.board.renderMoney()
      }, this.board.tick)
    }
  }

  DuckHorsePS() {
    if (this.duckHorseCount >= 1) {
      setInterval(() => {
        this.board.money = this.board.money + (this.duckHorseCount * this.duckHorseMPS)
        this.board.renderMoney()
      }, this.board.tick)
    }
  }

  QPSCalc(){
    let QPS = document.getElementById("QPSp")
    let TotalQPS = ((this.ducklingCount * this.ducklingMPS) + (this.ducksCount * this.ducksMPS) + (this.duckHorseCount * this.duckHorseMPS)) * this.board.multi
    QPS.innerHTML = `Quacks Per Second: ${TotalQPS.toFixed(2)}`
  }

  priceCheck(){
    
    if(this.board.money >= this.ducklingCost){    
      let ducklingButton = document.getElementById("ducklingButton")
      ducklingButton.classList.remove("disabled")
    } else if (this.board.money < this.ducklingCost){
      let ducklingButton = document.getElementById("ducklingButton")
      ducklingButton.classList.add("disabled")
    }
    if (this.board.money >= this.ducksCost) {
      let ducksButton = document.getElementById("ducksButton")
      let ducksDiv = document.getElementById("ducksDiv")
      ducksButton.classList.remove("disabled")
      ducksDiv.classList.remove("hidden")
    } else if (this.board.money < this.ducksCost) {
      let ducksButton = document.getElementById("ducksButton")
      ducksButton.classList.add("disabled")
    }

    if (this.board.money >= this.duckHorseCost) {
      let duckHorseButton = document.getElementById("horseSizedDuckButton")
      let duckHorseDiv = document.getElementById("horseSizedDuckDiv")
      duckHorseButton.classList.remove("disabled")
      duckHorseDiv.classList.remove("hidden")
    } else if (this.board.money < this.duckHorseCost) {
      let duckHorseButton = document.getElementById("horseSizedDuckButton")
      duckHorseButton.classList.add("disabled")
    }
  }

  hideMenu() {
    let hideButton = document.getElementById("openAuto")
    let upDiv = document.getElementById("autoQuackDiv")
    hideButton.addEventListener("click", () => {

      if (!this.hidden) {
        console.log(upDiv)
        upDiv.classList.add("hideSide")
        hideButton.classList.add("closedAuto")
        this.hidden = true;
      } else {
        upDiv.classList.remove("hideSide")
        hideButton.classList.remove("closedAuto")
        this.hidden = false;
      }
    })
  }

  start(){
    this.DucklingCostRender()
    this.DucklingCountRender()
    this.DucklingButton()

    this.DucksCostRender()
    this.DucksCountRender()
    this.DucksButton()

    this.DuckHorseCostRender()
    this.DuckHorseCountRender()
    this.DuckHorseButton()

    this.hideMenu()
    this.QPSCalc();
    this.DucksPS()
    this.DucklingPS()
    this.DuckHorsePS()
  }

}

module.exports = AutoQuack;