class Ducks {

  constructor(board) {
    this.board = board
    this.hidden = true
  }

  menuOptions(){
    let robber = document.getElementById("menuRobber")
    if (this.board.unlocks.includes("robbed")){
      robber.classList.remove("hidden")
    }
    let norris = document.getElementById("menuNorris")
    if (this.board.unlocks.includes("DuckNorris")) {
      norris.classList.remove("hidden")
    }
  }
  menuOptionsButtons(){
    let robber = document.getElementById("menuRobber")
    let norris = document.getElementById("menuNorris")
    let regular = document.getElementById("menuRegular")
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