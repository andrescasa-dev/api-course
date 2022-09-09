import showScheme from "./events/showScheme.js"
import restrictQuantity from "./events/restrictQuantity.js";
import avoidEmpty from "./events/avoidEmpty.js";
import copyToClipboard from "./events/copyToClipboard.js";

class App{
  constructor(){
    this.listeners();
    showScheme();
  }

  listeners(){
    document.addEventListener('click', (event)=>{
      if(event.target.matches('#getScheme')){
        showScheme();
      }
      if(event.target.matches('#colorText')){
        copyToClipboard(event);
      }
    })
    document.addEventListener('change', (event)=>{
      if(event.target.closest('menu')){
        avoidEmpty(event);
        showScheme();
      }
    })
    document.addEventListener('input', (event)=>{
      if(event.target.matches("#colorQuantity")){
        restrictQuantity(event);
        showScheme();
      }
    })
  }
}

new App();