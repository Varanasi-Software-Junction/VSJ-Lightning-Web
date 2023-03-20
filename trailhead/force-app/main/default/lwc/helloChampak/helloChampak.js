import { LightningElement } from 'lwc';
export default class HelloChampak extends LightningElement {
  a=0;
  result = 0;
  changeA(event) {
    this.a=event.target.value;
    console.log(this.a);
    this.result =2*this.a;
  }
}