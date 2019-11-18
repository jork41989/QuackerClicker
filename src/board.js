
class Board{
  constructor(gameDiv) {
  this.money = 1
  this.count = 99
  this.gameDivR = gameDiv
  }


makeButton(){
  console.log(this)
  let innerButton = document.createElement('button')
  innerButton.innerHTML = "click_me"
  innerButton.className = "mehButton"
  innerButton.addEventListener('click', () =>  {
    this.money = this.money + 1
    this.renderMoney()
  }, false);
 return this.gameDivR.appendChild( innerButton)
}

renderMoney(){
  let moneyCount = document.getElementById('money')
  moneyCount.innerHTML = this.money
}

start() {
  this.renderMoney()
  this.makeButton()
}
}

module.exports = Board;