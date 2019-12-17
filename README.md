#  Welcome to Quackerclicker!
![Main](https://i.imgur.com/ArLSmWc.png)

A incremental game that invites you to quack your way through your day! 

[Visit Us](https://quackerclicker.firebaseapp.com/)

Created by:

[Jordan Ackerman](JordanAckerman.com)

[LinkedIn](https://www.linkedin.com/in/ackermanjordan/)

[Github](https://github.com/jork41989)

## Technologies

QuakcerClicker is built with a combination of HTML, CSS, JavaScript, and deployed using Google Firebase.


## Functionality & MVP

### Base Game

- Created a base game element to store Quacks, tick-speed, the curent increment for clicks, and the current multiplier.

### Click Element

- Created the duck-click element and the JavaScript actions to accrue quacks.

### Click Upgrades

- Created the base logic that was used to structure the upgrades class, this includes both JavaScript logic and CSS.

### Auto Quacks

- Created the base logic that was used to structure the AutoQuack class, this includes both JavaScript logic and CSS.

#### Code Sample

- This is a sample of the code used to render the functionality of a AutoQuack element.

``` JavaScript

DucklingButton(){
    let ducklingButton = document.getElementById("ducklingButton")
    let ducklingCostL = document.getElementById("ducklingCost")
    ducklingButton.addEventListener("click", () => {
      if(this.board.money >= this.ducklingCost){
        this.board.money = this.board.money - this.ducklingCost
        this.ducklingCost = (this.ducklingCost * 1.2).toFixed(2)
        this.ducklingCount = this.ducklingCount + 1
        this.DucklingCostRender()
        this.DucklingCountRender()
        this.board.renderMoney()
        this.QPSCalc()
        if(this.ducklingCount === 1){
          this.DucklingPS()
        }
      } else{
        ducklingCostL.classList.add("noMoney")
        setTimeout(() => {
          ducklingCostL.classList.remove("noMoney")
        }, 1000)
      }
    })
  }

```


### Ducks

- Designed achievements and unlockable ducks, had the graphic for the duck changed based off of achievement.

- Created a menu to display the available achievements and changed their state and internal elements based off of whether they were unlocked.

- Created a menu to display the  users unlocked ducks, allows the user to change their current ducks skin.

- Designed custom graphics for each unlockable Duck from scratch.