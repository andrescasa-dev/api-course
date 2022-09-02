import feed from "./Pages/feed.js";
import form from "./Pages/form.js";

class App {
  constructor(){
    this.evenListener();
    feed();
  }

  evenListener(){
    document.addEventListener('submit',(event)=>{
      event.preventDefault();
      form();
    })
  }
}

new App();

