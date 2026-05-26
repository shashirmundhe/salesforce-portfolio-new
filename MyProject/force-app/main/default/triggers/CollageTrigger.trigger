trigger CollageTrigger on Collage__c (before insert , before update) {
    
    if(trigger.isbefore && trigger.isinsert){
        
        CollageTriggerHandler.oninsertcollage(trigger.new);
    }
    
    if (trigger.isbefore && trigger.isupdate){
        
        CollageTriggerHandler.onupdatecollage(trigger.new);
    }

}