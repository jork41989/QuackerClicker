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
    console.log(moneyCount)
    moneyCount.innerHTML = this.board.money
  }
  makeUpgradeButton(){
    let upgradeButton = document.createElement('button')
    let upgradeDiv = document.getElementById('upgrades')
    upgradeButton.innerHTML = "Buy the upgrade"
    upgradeButton.className = "mehButton"
   
  
      upgradeButton.addEventListener('click', () => {
        console.log(this.board)
        if (this.board.money >= this.cost) {
          this.board.money = this.board.money - 10
          console.log(this.board.money)
          this.board.inc = this.board.inc * 2
          this.cost = this.cost * 2
          console.log(this.cost)
          this.renderMoney()
          this.renderCost()
        }
      }, false);
      
   upgradeDiv.appendChild(upgradeButton)
  }

  renderCost(){
    let oldCost = document.getElementById("upgradeLabel")
    if (oldCost){
      oldCost.parentNode.removeChild(oldCost)
    }
    let upgradeButtonCost = document.createElement('p')
    upgradeButtonCost.innerHTML = this.cost
    upgradeButtonCost.id = "upgradeLabel"
    let upgradeDiv = document.getElementById('upgrades')
    upgradeDiv.appendChild(upgradeButtonCost)

  }

  start(){
    this.makeUpgradeButton();
    this.renderCost()
  }
  
}

module.exports = Upgrades;