trigger PatientTrigger on Patient__c (before insert, after insert, before update, after update) {
    
    // BEFORE INSERT
    if(Trigger.isBefore && Trigger.isInsert){
        PatientTriggerHandler.onInsertPatient(Trigger.new);
    }
    
    // BEFORE UPDATE
    if(Trigger.isBefore && Trigger.isUpdate){
        PatientTriggerHandler.validatePatient(Trigger.new);
    }
    
    // AFTER INSERT
    if(Trigger.isAfter && Trigger.isInsert){
        PatientTriggerHandler.onAddInformation(Trigger.new);
        PatientTriggerHandler.sharePatient(Trigger.new);
    }
}