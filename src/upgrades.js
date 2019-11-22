class Upgrades {

  constructor(board) {
    this.board = board
    this.gameDivR = board.gameDiv
    this.inc = board.inc
    this.crumbInc = .1
    this.sliceInc = 1
    this.loafInc = 100
    this.money = board.money
    this.crumbCost = 5
    this.sliceCost = 50
    this.loafCost = 1000
    this.hidden = false
  }
  makeCrumbButton(){
    let upgradeButton  = document.getElementById('breadButton')
    let duck = document.getElementById('duck')
    let unlock = document.getElementById('unlocks')
    let costP = document.getElementById('upgradeLabel')
    
      upgradeButton.addEventListener('click', () => {
        if (this.board.money >= this.crumbCost) {
          this.board.money = this.board.money - this.crumbCost
          this.board.inc = this.board.inc + this.crumbInc
          this.crumbCost = this.crumbCost * 2;
          this.board.renderMoney()
          this.renderCrumbCost();
          this.QPCCalc();
        } else {
          if (!this.board.unlocks.includes("robbed")){
          this.board.money += 100
          this.board.renderMoney()
            if (duck.classList.length === 1) {
              duck.classList.add("robberDuck")
            } else {
              duck.classList = "duckButton robberDuck"
            }
          unlock.innerHTML = "Robber Ducky!";
          unlock.classList.add("unlocked");
          this.board.unlocks.push("robbed")
          setTimeout(() => { 
            unlock.classList.remove("unlocked");
            unlock.innerHTML = "hide Quick";
          }, 1000)
        } else {
            costP.classList.add("noMoney")
            setTimeout(() => {
              costP.classList.remove("noMoney")
            }, 1000)
        }
        }
      }, false);

  }

  sliceButtonClick (){
    let sliceButton = document.getElementById('sliceButton')
    let costP = document.getElementById('sliceUpgradeLabel')
    sliceButton.addEventListener('click', () => {
      if (this.board.money >= this.sliceCost) {
        this.board.money = this.board.money - this.sliceCost
        this.board.inc = this.board.inc + this.sliceInc
        this.sliceCost = this.sliceCost * 2;
        this.board.renderMoney()
        this.renderSliceCost();
        this.QPCCalc();
      } else{
        costP.classList.add("noMoney")
        setTimeout(()=>{
          costP.classList.remove("noMoney")
        }, 1000)
      }
    }
    )
  }
  loafButtonClick() {
    let loafButton = document.getElementById('loafButton')
    let costP = document.getElementById('loafUpgradeLabel')
    loafButton.addEventListener('click', () => {
      if (this.board.money >= this.loafCost) {
        this.board.money = this.board.money - this.loafCost
        this.board.inc = this.board.inc + this.loafInc
        this.loafCost = this.loafCost * 2;
        this.board.renderMoney()
        this.renderLoafCost();
        this.QPCCalc();
      } else {
        costP.classList.add("noMoney")
        setTimeout(() => {
          costP.classList.remove("noMoney")
        }, 1000)
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
  renderLoafCost() {
    let loafCostLabel = document.getElementById("loafUpgradeLabel")
    loafCostLabel.innerHTML = `Cost ${this.loafCost}`
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
    if (this.board.money >= this.loafCost) {
      let loafDiv = document.getElementById("loafDiv")
      loafDiv.classList.remove("hidden")
      loafButton.classList.remove("disabled")
    } else if (this.board.money < this.loafCost) {
      let loafButton = document.getElementById('loafButton')
      loafButton.classList.add("disabled")
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

  QPCCalc(){
    let QPCp = document.getElementById("QPCp")
    let QPCTotal = this.board.inc
    QPCp.innerHTML = `Quacks Per Click: ${QPCTotal.toFixed(2)}`
  }

  start(){
    this.renderSliceCost()
    this.renderCrumbCost()
    this.renderLoafCost();
    this.makeCrumbButton();
    this.sliceButtonClick();
    this.loafButtonClick();
    this.hideMenu();
    this.QPCCalc();
  }
  
}

module.exports = Upgrades;