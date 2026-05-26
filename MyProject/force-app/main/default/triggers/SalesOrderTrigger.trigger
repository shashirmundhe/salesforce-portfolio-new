trigger SalesOrderTrigger on Sales_Order__c (before insert, after insert, before update, after update) {
    
    if(trigger.isbefore && trigger.isinsert){
        SalesOrderTriggerHandler.oninsertsales(trigger.new);
    }
    
       if(trigger.isbefore && trigger.isupdate){
        SalesOrderTriggerHandler.onupdatesales(trigger.new);
}
    if(trigger.isafter && trigger.isupdate){
        SalesOrderTriggerHandler.onupdateRejectionReason(trigger.new,trigger.oldMap);
        
    }
    if(trigger.isafter && trigger.isinsert){
        SalesOrderTriggerHandler.onafterinsertorder(trigger.new);
    }
}