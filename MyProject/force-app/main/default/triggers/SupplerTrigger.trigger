trigger SupplerTrigger on Supplier__c (before insert, before update) {
    
    if(trigger.isbefore && trigger.isinsert){
       SupplierTriggerHandler.onbeforeinsert(trigger.new);     
    }
    
    if(trigger.isbefore && trigger.isinsert){ 
      SupplierTriggerHandler.onbeforeupdate(trigger.new);
    }
}