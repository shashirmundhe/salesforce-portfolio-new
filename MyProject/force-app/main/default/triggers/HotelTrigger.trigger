trigger HotelTrigger on Hotel__c (before insert,before update,After insert,
                                  before delete,After Delete, After Undelete){
    
    if(trigger.isbefore && trigger.isinsert){
        HotelTriggerHandler.onbeforeinsert(trigger.new);
    }
    if(trigger.isbefore && trigger.isupdate){
       HotelTriggerHandler.onbeforeinsert(trigger.new);
    }
}