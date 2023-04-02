import { LightningElement } from 'lwc';
import sayHello from '@salesforce/apex/HelloClass.sayHello';
export default class AccessClass extends LightningElement {
output="Waiting";
handleClick(event)
{
    sayHello().then((x)=>{
        this.output=x.toString();
    });
    // this.output=x;
}

}