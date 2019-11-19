class AutoQuack {
  constructor(board) {
    this.board = board
    this.ducklingCost = 100
    this.ducklingMPS = .1
    this.ducklingCount = 0
  }


  DucklingCostRender(){
    let ducklingCostDiv = document.getElementById("ducklingCost")
    ducklingCostDiv.innerHTML = `Cost: ${this.ducklingCost}`
  }

  DucklingCountRender(){
    let ducklingCountDiv = document.getElementById("ducklingCount")
    ducklingCountDiv.innerHTML = `Ducklings: ${this.ducklingCount}`
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

  DucklingPS(){
    if(this.ducklingCount >= 1){
      setInterval(() =>{
        this.board.money = this.board.money + (this.ducklingCount * this.ducklingMPS)
        this.board.renderMoney()
      }, 1000)
    }
  }

  start(){
    this.DucklingCostRender()
    this.DucklingCountRender()
    this.DucklingButton()
  }

}

module.exports = AutoQuack;