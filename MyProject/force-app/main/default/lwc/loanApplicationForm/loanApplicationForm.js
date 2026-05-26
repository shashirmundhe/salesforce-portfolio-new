import { LightningElement } from 'lwc';

export default class LoanApplicationForm extends LightningElement {

    applicantName = '';
    loanAmount = '';

    handleNameChange(event) {
        this.applicantName = event.target.value;
    }

    handleAmountChange(event) {
        this.loanAmount = event.target.value;
    }

    handleSubmit() {
        alert(
            'Application Submitted!\n' +
            'Applicant Name: ' + this.applicantName +
            '\nLoan Amount: ' + this.loanAmount
        );

        console.log('Applicant Name:', this.applicantName);
        console.log('Loan Amount:', this.loanAmount);
    }
}