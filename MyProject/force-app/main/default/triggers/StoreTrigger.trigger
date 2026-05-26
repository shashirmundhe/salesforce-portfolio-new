trigger StoreTrigger on Store__c (before insert) {
    
    system.debug('isinsert  ' + trigger.isinsert);
    system.debug('is after  ' + trigger.isafter);
    system.debug('isbefor ' + trigger.isbefore);

}