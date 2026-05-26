trigger SolarTrigger on Solar_Installation__c (before insert) {
    if(trigger.isbefore && trigger.isinsert){
        SolarTriggerHandler.isinsertsolar(trigger.new);
    }

}