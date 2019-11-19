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
    this.hidden = false
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
          duck.classList.remove("robberDuck");
        } else {
          if (!this.board.unlocks.includes("robbed")){
          duck.classList.add("robberDuck");
          this.board.money += 100
          this.board.renderMoney()
          unlock.innerHTML = "Robbed!";
          unlock.classList.add("unlocked");
          this.board.unlocks.push("robbed")
          setTimeout(() => { 
            unlock.classList.remove("unlocked");
            unlock.innerHTML = "hide Quick";
          }, 1000)
        }
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

  hideMenu(){
    let hideButton = document.getElementById("openUp")
    let upDiv = document.getElementById("upgrades")
    hideButton.addEventListener("click", () => {
      
      if(!this.hidden){
        console.log(upDiv)
        upDiv.classList.add("hideSide")
        hideButton.classList.add("closedUp")
        this.hidden = true;
      } else {
        upDiv.classList.remove("hideSide")
        hideButton.classList.remove("closedUp")
        this.hidden = false;
      }
    })
  }

  start(){
    this.renderSliceCost()
    this.renderCrumbCost()
    this.makeCrumbButton();
    this.sliceButtonClick();
    this.hideMenu()
  }
  
}

module.exports = Upgrades;