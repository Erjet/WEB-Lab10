import { DogCardComponent,ModalWindowComponent } from "./generator";
import { RequestSender } from "./model";
import { View } from "./view";

class AppController {
  constructor() {
    this.dogControllers = [];
  }

  init() {
    let sender = new RequestSender();
    sender.sendJSONRequest().then((data) => {
      data.forEach((element) => {
        let dog = new DogController(element);
        dog.showDog();
        this.dogControllers.push(dog);
      });
    });
  }
}

class DogController {
  constructor(dogObject) {
    this.dog = dogObject;
    this.component = null;
    this.modalWindowComponent = null;
    this.showModalWindow = this.showModalWindow.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
    this.view = new View();
  }

  showDog() {
    this.component = new DogCardComponent(this.dog);
    this.view.render(this.component, ".list", "BEFOREEND");
    this.component.setOnClickHandler(this.showModalWindow);
  }

  showModalWindow() {
    this.modalWindowComponent = new ModalWindowComponent(this.dog);
    this.view.render(this.modalWindowComponent, "body", "AFTERBEGIN");
    this.modalWindowComponent.setOnClickHandler(this.closeModalWindow);
  }

  closeModalWindow() {
    $(".window-wrapper").remove();
    this.modalWindowComponent = null;
  }
}

let app = new AppController();
app.init();