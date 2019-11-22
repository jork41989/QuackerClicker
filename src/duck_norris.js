class DuckNorris {
  constructor(board) {
    this.board = board
    this.caught = false
  }

  gooseSeason(){
    let gooseDiv = document.getElementById("HONK")
    if(!this.caught){

      this.goose1();
      
      
    }
  }

  goose1(){
    let gooseDiv = document.getElementById("HONK")
    let HonkSound = document.getElementById("HonkSound")
    gooseDiv.classList.remove("hideHonk")
    gooseDiv.classList.add("honk1")
    HonkSound.play();
    setTimeout(() => {
      gooseDiv.classList.remove("honk1")
      gooseDiv.classList.add("hideHonk")
      this.goose2();
    }, 1000)
    
  }

  goose2(){
    let gooseDiv = document.getElementById("HONK")
    let HonkSound = document.getElementById("HonkSound")
    gooseDiv.classList.add("honk2")
    gooseDiv.classList.remove("hideHonk")
    HonkSound.play();
    setTimeout(() => {
      gooseDiv.classList.remove("honk2")
      gooseDiv.classList.add("hideHonk")
      this.goose3();
    }, 1000)
    
  }

  goose3(){
    let gooseDiv = document.getElementById("HONK")
    let HonkSound = document.getElementById("HonkSound")
    gooseDiv.classList.add("honk3")
    gooseDiv.classList.remove("hideHonk")
    HonkSound.play();
    setTimeout(() => {
      gooseDiv.classList.remove("honk3")
      gooseDiv.classList.add("hideHonk")
    }, 1000)
    
  }

  catchGoose(){
    let gooseDiv = document.getElementById("HONK")
    let duck = document.getElementById('duck')
    let unlock = document.getElementById('unlocks')
    let caughtSound = document.getElementById('GotEm')
    gooseDiv.addEventListener("click", () => {
      this.caught = true;
      gooseDiv.classList.add("hideHonk")
      if (duck.classList.length === 1){
        duck.classList.add("duckNorris")
      } else {
        
        duck.classList = "duckButton duckNorris"
      }

      this.board.unlocks.push("DuckNorris")
      unlock.innerHTML = "Duck Norris!";
      unlock.classList.add("unlocked");
      caughtSound.play();
      setTimeout(() => {
        unlock.classList.remove("unlocked");
        unlock.innerHTML = "hide Quick";
        this.board.money += 300
        this.board.renderMoney()
      }, 1000)
    })
  }

  start(){
    this.gooseSeason()
    this.catchGoose()
  }



}

module.exports = DuckNorris;