import { LightningElement } from 'lwc';

export default class MyObjectComponent extends LightningElement {

    resultObject = {}; // initial empty object

    runObjectMethods() {
        // Create object
        const user = {
            name: 'Shashi Mundhe',
            age: 25,
            status: 'Active'
        };

        console.log('Original Object:', JSON.stringify(user));

        // Assign to UI
        this.resultObject = user;
    }

    updateObject() {
        // Update using spread operator (best practice)
        this.resultObject = {
            ...this.resultObject,
            name: 'Updated Name',
            age: this.resultObject.age + 1,
            status: 'Updated'
        };

        console.log('Updated Object:', JSON.stringify(this.resultObject));
    }
}