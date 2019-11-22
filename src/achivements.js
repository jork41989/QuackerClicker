class Achivements {
  constructor(board) {
    this.openDiv = false
    this.board = board
  }

  achivementButton(){
    let buttonA = document.getElementById("duckchivementsButton")
    let achivementDiv = document.getElementById("duckchivements")

    buttonA.addEventListener("click", () =>{
      this.board.DucksL.menuOptions()
      if(!this.openDiv){
        achivementDiv.classList.remove("hidden")
        this.openDiv = true
      } else {
        achivementDiv.classList.add("hidden")
        this.openDiv = false
      }
    })
  }

  start(){
    this.achivementButton()
  }

}

module.exports = Achivements;