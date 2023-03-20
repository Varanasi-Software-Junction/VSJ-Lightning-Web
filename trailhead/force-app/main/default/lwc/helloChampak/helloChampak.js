import { LightningElement } from 'lwc';
export default class HelloChampak extends LightningElement {
  greeting = 'Champak';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}