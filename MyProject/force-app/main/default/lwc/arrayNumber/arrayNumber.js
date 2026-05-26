import { LightningElement, track } from 'lwc';

export default class ArrayNumber extends LightningElement {

    @track arr1 = [1, 2, 3];
    nextNumber = 4;   // start from 4

    addNumber() {
        this.arr1 = [...this.arr1, this.nextNumber];
        this.nextNumber++; // increment for next click
    }
}