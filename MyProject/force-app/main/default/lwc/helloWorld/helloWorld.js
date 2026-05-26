import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name = 'Shashikant'

    changeName(){
        this.name = 'change name by button'
    }
    addlastname() {
        this.name = this.name + ' Mundhe';
    }
}