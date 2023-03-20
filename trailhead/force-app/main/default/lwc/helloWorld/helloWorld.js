import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Champak';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}