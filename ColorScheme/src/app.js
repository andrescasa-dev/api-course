import buttonHandler from "./events/buttonHandler.js"

class App{
  constructor(){
    this.listeners();
    buttonHandler();
  }

  listeners(){
    document.addEventListener('click', ({target})=>{
      if(target.matches('#getScheme')){
        buttonHandler();
      }
    })
  }
}

new App();