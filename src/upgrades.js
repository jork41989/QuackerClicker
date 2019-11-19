class Upgrades {

  constructor(board) {
    this.board = board
    this.gameDivR = board.gameDiv
    this.inc = board.inc
    this.money = board.money
    this.cost = 10
  }
  renderMoney() {
    let moneyCount = document.getElementById('money')
    moneyCount.innerHTML = this.board.money
  }
  makeUpgradeButton(){
    let upgradeButton  = document.getElementById('breadButton')
    let duck = document.getElementById('duckButton')
    upgradeButton.className = "mehButton"
    console.log(duck)
      upgradeButton.addEventListener('click', () => {
        if (this.board.money >= this.cost) {
          this.board.money = this.board.money - 10
          this.board.inc = this.board.inc + (this.board.inc / 2)
          this.cost = this.cost * 2
          this.renderMoney()
          this.renderCost()
        } else {
          
        }
      }, false);

  }

  renderCost(){

    let upgradeButtonCost = document.getElementById("upgradeLabel")
    upgradeButtonCost.innerHTML = `cost: ${this.cost}`
    upgradeButtonCost.id = "upgradeLabel"


  }

  start(){
    this.renderCost()
    this.makeUpgradeButton();
  }
  
}

module.exports = Upgrades;