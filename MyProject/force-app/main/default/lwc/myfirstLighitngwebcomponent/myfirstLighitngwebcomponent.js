import { LightningElement, track } from 'lwc';

export default class MyFirstComponent extends LightningElement {

    @track userName = '';
    @track inputReceivedValue = '';
    @track age = '';

    // Input Change
    handleChange(event){
        this.userName = event.target.value;
        this.inputReceivedValue = this.userName;
    }

    // Button Click
    handleClick(){
        this.age = 25; // example
    }
}