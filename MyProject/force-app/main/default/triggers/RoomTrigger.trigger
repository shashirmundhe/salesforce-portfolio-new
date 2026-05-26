trigger RoomTrigger on Room__c (before insert) {
    if(trigger.isinsert && trigger.isbefore){
        RoomTriggerHandler.onbeforeinseroom(trigger.new);
        
    }

}