export default class slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListenner("mousemove", this.onMove);
  }

  onMove(event) {}

  onEnd(event) {
    this.wrapper.removeEventListenner("mousemove", this.onMove);
  }

  addSlidEvents() {
    this.wrapper.addEventListenner("mousedown", this.onStart);
    this.wrapper.addEventListenner("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.addSlidEvents();
    this.bindEvents();
    return this;
  }
}
