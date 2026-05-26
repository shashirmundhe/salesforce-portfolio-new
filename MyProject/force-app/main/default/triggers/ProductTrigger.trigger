trigger ProductTrigger on Product__c (before insert,before update) {
    
    if(trigger.isbefore && trigger.isInsert){
        ProductTriggerHandler.onBeforeinsert(trigger.new);
    }
    
     if(trigger.isbefore && trigger.isUpdate){
        ProductTriggerHandler.onBeforeupdate(trigger.new);
     }
}