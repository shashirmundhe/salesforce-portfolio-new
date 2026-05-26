trigger PurchaseOrderTrigger on Purchase_Order__c (before insert, before update) {
    
    if(trigger.isbefore && trigger.isinsert){
        PurchaseOrderTriggerHandler.onUpdatePurchseOrder(trigger.new);
        
    }
    
    
    if(trigger.isbefore && trigger.isupdate){
        PurchaseOrderTriggerHandler.onUpdateStatue(trigger.new);
    }

}