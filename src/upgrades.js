class Upgrades {

  constructor(board) {
    this.board = board
    this.gameDivR = board.gameDiv
    this.inc = board.inc
    this.crumbInc = .1
    this.money = board.money
    this.crumbCost = 10
  }
  makeCrumbButton(){
    let upgradeButton  = document.getElementById('breadButton')
    let duck = document.getElementById('duck')
    let unlock = document.getElementById('unlocks')
    upgradeButton.className = "mehButton"
    
      upgradeButton.addEventListener('click', () => {
        if (this.board.money >= this.crumbCost) {
          this.board.money = this.board.money - this.crumbCost
          this.board.inc = this.board.inc + this.crumbInc
          this.crumbCost = this.crumbCost * 2;
          this.board.renderMoney()
          this.renderCost();
          duck.classList.remove("batDuck");
        } else {
          duck.classList.add("batDuck");
          unlock.innerHTML = "To the rescue!";
          unlock.classList.add("unlocked");
          setTimeout(() => { 
            unlock.classList.remove("unlocked");
            unlock.innerHTML = "hide Quick";
          }, 1000)

        }
      }, false);

  }

  renderCost(){

    let upgradeButtonCost = document.getElementById("upgradeLabel")
    upgradeButtonCost.innerHTML = `cost: ${this.crumbCost}`
    upgradeButtonCost.id = "upgradeLabel"


  }

  start(){
    this.renderCost()
    this.makeCrumbButton();
  }
  
}

module.exports = Upgrades;