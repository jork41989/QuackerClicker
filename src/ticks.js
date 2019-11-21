class Tick {
  constructor(board) {
    this.board = board
    this.cost = 1000
  }

  tickCost(){
    let QSDiv = document.getElementById("quackSpeedCost")
    QSDiv.innerHTML = `Cost: ${this.cost}`
  }

  tickButton(){
    let QSB = document.getElementById("QSButton")
    let QSDiv = document.getElementById("quackSpeedCost")
    QSB.addEventListener("click", ()=> {
      if(this.board.money >= this.cost){
        this.board.money -= this.cost
        this.board.tick = this.board.tick / 2
        this.board.multi = this.board.multi * 2
        this.cost = this.cost * 10
        console.log(this.board.multi)
        this.tickCost()
        this.board.upgradeMulti()
        this.board.renderMoney()
      } else{
        QSDiv.classList.add("noMoney")
        setTimeout(() => {
          QSDiv.classList.remove("noMoney")
        }, 1000)
      }
    })
  }

  priceCheck(){
    if (this.board.money >= this.cost) {
      let QSB = document.getElementById("QSButton")
      QSB.classList.remove("disabled")
    } else if (this.board.money < this.cost) {
      let QSB = document.getElementById("QSButton")
      QSB.classList.add("disabled")
    }
  }

  start(){
    this.tickCost()
    this.tickButton()
    this.priceCheck()
  }
}

module.exports = Tick;