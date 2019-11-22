class Ducks {

  constructor(board) {
    this.board = board
    this.hidden = true
  }

  menuOptions(){
    let robber = document.getElementById("menuRobber")
    let goal1 = document.getElementById("goal1")
    let goal1A = document.getElementById("goal1Unlock")
    if (this.board.unlocks.includes("robbed")){
      robber.classList.remove("hidden")
      goal1.classList.add("hidden")
      goal1A.classList.remove("hidden")
    }
    let norris = document.getElementById("menuNorris")
    let goal2 = document.getElementById("goal2")
    let goal2A = document.getElementById("goal2Unlock")
    if (this.board.unlocks.includes("DuckNorris")) {
      norris.classList.remove("hidden")
      goal2.classList.add("hidden")
      goal2A.classList.remove("hidden")
    }
    let golden = document.getElementById("menuGolden")
    
    let goal4 = document.getElementById("goal4")
    let goal4A = document.getElementById("goal4Unlock")
    if (this.board.unlocks.includes("Golden")) {
      golden.classList.remove("hidden")
      
      goal4.classList.add("hidden")
      goal4A.classList.remove("hidden")
    }

    let goose = document.getElementById("menuGoose")
    let goal3 = document.getElementById("goal3")
    let goal3A = document.getElementById("goal3Unlock")
    if (this.board.unlocks.includes("HONNNNK")) {
      goose.classList.remove("hidden")
      goal3.classList.add("hidden")
      goal3A.classList.remove("hidden")
      
    }
  }
  menuOptionsButtons(){
    let robber = document.getElementById("menuRobber")
    let norris = document.getElementById("menuNorris")
    let regular = document.getElementById("menuRegular")
    let golden = document.getElementById("menuGolden")
    let goose = document.getElementById("menuGoose")
    let duck = document.getElementById('duck')
    
    regular.addEventListener("click", () => {
      duck.classList = "duckButton"
    })

    robber.addEventListener("click", () =>{
      duck.classList = "duckButton robberDuck"
    })

    norris.addEventListener("click", () => {
      duck.classList = "duckButton duckNorris"
    })

    golden.addEventListener("click", () => {
      duck.classList = "duckButton goldenGoose"
    })

    goose.addEventListener("click", () => {
      duck.classList = duck.classList = "duckButton gooseHonk"
    })
  }

  moneyCheck(){
    let duck = document.getElementById('duck')
    let unlock = document.getElementById('unlocks')
    if (this.board.money >= 1000000 && !this.board.unlocks.includes("Golden")){
      duck.classList = "duckButton goldenGoose"
      this.board.unlocks.push("Golden")
      unlock.innerHTML = "Gooooooold!";
      unlock.classList.add("unlocked");
      setTimeout(() => {
        unlock.classList.remove("unlocked");
        unlock.innerHTML = "hide Quick";
      }, 1000)

    }
  }


  menuButton(){
    let menu = document.getElementById("duckMenu")
    let menuButtonDiv = document.getElementById("duckMenuButton")
    menuButtonDiv.addEventListener("click", () => {
      if (this.hidden) {
        this.menuOptions()
        menu.classList.remove("hidden")
        this.hidden = false
        
      } else {
        this.menuOptions()
        menu.classList.add("hidden")
        this.hidden = true
      }
    })
    
  }

  start(){
    this.menuButton()
    this.menuOptionsButtons();
  }
}

module.exports = Ducks