import { LightningElement } from 'lwc';

export default class StudentForm extends LightningElement {
       name = '';
    age = '';
    course = '';
    email = '';
    phone = '';
    address = '';

    student; // object to store final data

    handleName(event) {
        this.name = event.target.value;
    }

    handleAge(event) {
        this.age = event.target.value;
    }

    handleCourse(event) {
        this.course = event.target.value;
        }

    handleEmail(event) {
        this.email = event.target.value;
    }

    handlePhone(event) {
        this.phone = event.target.value;
    }

    handleAddress(event) {
        this.address = event.target.value;
    }

    addStudent() {
        this.student = {
            name: this.name,
            age: this.age,
            course: this.course,
            email: this.email,
            phone: this.phone,
            address: this.address
        };
    }
}