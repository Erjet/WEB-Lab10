import { createElement } from "./view";

class BaseComponent {
    constructor(object) {
      this.name = object.title;
      this.age = object.age;
      this.description = object.description;
      this.gender = object.sex;
      this.link = object.dogImage;
      this._element = null;
    }
  
    getHTML() {
      return ``;
    }
  
    getElement() {
      if (!this._element) {
        this._element = createElement(this.getHTML());
      }
  
      return this._element;
    }
  
    removeElement() {
      this._element = null;
    }
  }
  
export class DogCardComponent extends BaseComponent {
    constructor(object) {
      super(object);
    }
  
    getHTML() {
      return `<div class="container">
          <img class="container-dog-picture" src="https://usersdogs.dmytrominochkin.cloud${this.link}">
          <div class="container-dog-info">
              <span class="text-base dog-info-name">${this.name}</span>
              <span class="text-base dog-info-gender">${this.gender}</span>
          </div>
      </div>`;
    }
  
    setOnClickHandler(handler) {
      let element = this.getElement();
      $(element).on("click", (evt) => {
        evt.stopPropagation();
        handler();
      });
    }
  }
  
export class ModalWindowComponent extends BaseComponent {
    constructor(object) {
      super(object);
    }
  
    getHTML() {
      return `<div class="window-wrapper">  
          <div class="background-mask">
          </div>
          <div class="modal-window">
          <img class="modal-window-dog-picture" src="https://usersdogs.dmytrominochkin.cloud${this.link}">
          <div class="modal-window-info">
              <span class="text-base info-name"> ${this.name}</span>
              <div class="info-data">
                  <span class="data-title">Sex</span>
                  <span class="data-data">${this.gender}</span>
              </div>
              <div class="info-data">
                  <span class="data-title">Age</span>
                  <span class="data-data">${this.age}</span>
              </div>
              <div class="info-data">
                  <span class="data-title">Personality</span>
                  <span class="data-data">${this.description}</span>
              </div>
          </div>
          <button class="info-adopt-button">Adopt Me</button>
      </div>
      </div>`;
    }
  
    setOnClickHandler(handler){
        let element = this.getElement().querySelector(".background-mask");
        element.addEventListener("click", (evt)=>{
            evt.stopPropagation();
            handler();
        });
    }
  }