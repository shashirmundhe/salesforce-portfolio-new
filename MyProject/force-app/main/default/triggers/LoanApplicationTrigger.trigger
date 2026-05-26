trigger LoanApplicationTrigger on Loan_Application__c (before insert, before update) {

    for(Loan_Application__c loan : Trigger.new){

        if(loan.Loan_Amount__c > (loan.Monthly_Income__c * 20)){
            loan.addError('Loan amount exceeds eligible limit.');
        }
    }
}