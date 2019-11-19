class Upgrades {

  constructor(board) {
    this.board = board
    this.gameDivR = board.gameDiv
    this.inc = board.inc
    this.crumbInc = .1
    this.sliceInc = 1
    this.money = board.money
    this.crumbCost = 10
    this.sliceCost = 100
  }
  makeCrumbButton(){
    let upgradeButton  = document.getElementById('breadButton')
    let duck = document.getElementById('duck')
    let unlock = document.getElementById('unlocks')
    
      upgradeButton.addEventListener('click', () => {
        if (this.board.money >= this.crumbCost) {
          this.board.money = this.board.money - this.crumbCost
          this.board.inc = this.board.inc + this.crumbInc
          this.crumbCost = this.crumbCost * 2;
          this.board.renderMoney()
          this.renderCrumbCost();
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

  sliceButtonClick (){
    let sliceButton = document.getElementById('sliceButton')
    sliceButton.addEventListener('click', () => {
      if (this.board.money >= this.sliceCost) {
        this.board.money = this.board.money - this.sliceCost
        this.board.inc = this.board.inc + this.sliceInc
        this.sliceCost = this.sliceCost * 2;
        this.board.renderMoney()
        this.renderSliceCost();
      }
    }
    )
  }

  renderCrumbCost(){
    let upgradeButtonCost = document.getElementById("upgradeLabel")
    upgradeButtonCost.innerHTML = `Cost: ${this.crumbCost}`
  }
  renderSliceCost(){
    let sliceCostLabel = document.getElementById("sliceUpgradeLabel")
    sliceCostLabel.innerHTML = `Cost ${this.sliceCost}`
  }

  priceCheck(){
    if(this.board.money >= this.sliceCost){
      let sliceDiv = document.getElementById("sliceDiv")
      sliceDiv.classList.remove("hidden")
      sliceButton.classList.remove("disabled")
    } else if (this.board.money < this.sliceCost){
      let sliceButton = document.getElementById('sliceButton')
      sliceButton.classList.add("disabled")
    }

    if (this.board.money >= this.crumbCost){
      let crumbButton = document.getElementById('breadButton')
      crumbButton.classList.remove("disabled")
    } else if (this.board.money < this.crumbCost){
      let crumbButton = document.getElementById('breadButton')
      crumbButton.classList.add("disabled")
    }
  }


  start(){
    this.renderSliceCost()
    this.renderCrumbCost()
    this.makeCrumbButton();
    this.sliceButtonClick();
  }
  
}

module.exports = Upgrades;