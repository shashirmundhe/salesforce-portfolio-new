trigger SalesOrderItemsTrigger on Sales_Order_Item__c (before insert , before update, after update) {
    
    if(Trigger.isBefore && Trigger.isInsert){
        SalesOrderItemTriggerHandler.addinformation(Trigger.new);
        
    }
    
      if(Trigger.isBefore && Trigger.isUpdate){
        SalesOrderItemTriggerHandler.adderror(Trigger.new);
        
    }
    
    
    if (Trigger.isAfter && Trigger.isUpdate) {
        // We pass both the new list and the oldMap to check for changes
        SalesOrderItemTriggerHandler.onupdateRejectionReason(Trigger.new, Trigger.oldMap);
    }
    
}