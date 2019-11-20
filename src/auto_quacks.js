class AutoQuack {
  constructor(board) {
    this.board = board
    this.ducklingCost = 100
    this.ducklingMPS = .1
    this.ducklingCount = 0
    this.ducksCost = 1000
    this.ducksMPS = 1
    this.ducksCount = 0
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
    ducklingButton.addEventListener("click", () => {
      if(this.board.money >= this.ducklingCost){
        console.log("quack")
        this.board.money = this.board.money - this.ducklingCost
        this.ducklingCost = this.ducklingCost * 2
        this.ducklingCount = this.ducklingCount + 1
        this.DucklingCostRender()
        this.DucklingCountRender()
        this.board.renderMoney()
        if(this.ducklingCount === 1){
          this.DucklingPS()
        }
      }
    })
  }

  DucksButton() {
    let ducksButton = document.getElementById("ducksButton")
    ducksButton.addEventListener("click", () => {
      if (this.board.money >= this.ducksCost) {
        console.log("quack")
        this.board.money = this.board.money - this.ducksCost
        this.ducksCost = this.ducksCost * 2
        this.ducksCount = this.ducksCount + 1
        this.DucksCostRender()
        this.DucksCountRender()
        this.board.renderMoney()
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
      }, 1000)
    }
  }

  DucksPS() {
    if (this.ducksCount >= 1) {
      setInterval(() => {
        this.board.money = this.board.money + (this.ducksCount * this.ducksMPS)
        this.board.renderMoney()
      }, 1000)
    }
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
      ducksButton.classList.remove("disabled")
    } else if (this.board.money < this.ducksCost) {
      let ducksButton = document.getElementById("ducksButton")
      ducksButton.classList.add("disabled")
    }
  }

  start(){
    this.DucklingCostRender()
    this.DucklingCountRender()
    this.DucklingButton()

    this.DucksCostRender()
    this.DucksCountRender()
  }

}

module.exports = AutoQuack;