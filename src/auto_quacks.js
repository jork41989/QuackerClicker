class AutoQuack {
  constructor(board) {
    this.board = board
    this.ducklingCost = 100
    this.ducklingMPS = .1
    this.ducklingCount = 0
    this.ducksCost = 1000
    this.ducksMPS = 1
    this.ducksCount = 0
    this.hidden = false
  }


  DucklingCostRender(){
    let ducklingCostDiv = document.getElementById("ducklingCost")
    ducklingCostDiv.innerHTML = `Cost: ${this.ducklingCost}`
  }
  DucksCostRender() {
    let ducksCostDiv = document.getElementById("ducksCost")
    ducksCostDiv.innerHTML = `Cost: ${this.ducksCost}`
  }

  
  DucklingCountRender(){
    let ducklingCountDiv = document.getElementById("ducklingCount")
    ducklingCountDiv.innerHTML = `Ducklings: ${this.ducklingCount}`
  }
  DucksCountRender() {
    let ducksCountDiv = document.getElementById("ducksCount")
    ducksCountDiv.innerHTML = `Ducks: ${this.ducksCount}`
  }

  DucklingButton(){
    let ducklingButton = document.getElementById("ducklingButton")
    let ducklingCostL = document.getElementById("ducklingCost")
    ducklingButton.addEventListener("click", () => {
      if(this.board.money >= this.ducklingCost){
        console.log("quack")
        this.board.money = this.board.money - this.ducklingCost
        this.ducklingCost = this.ducklingCost * 2
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
        this.ducksCost = this.ducksCost * 2
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

  QPSCalc(){
    let QPS = document.getElementById("QPSp")
    let TotalQPS = (this.ducklingCount * this.ducklingMPS) + (this.ducksCount * this.ducksMPS)
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
    this.hideMenu()
    this.QPSCalc();
  }

}

module.exports = AutoQuack;