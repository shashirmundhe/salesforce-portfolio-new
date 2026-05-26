trigger ContactTrigger on Contact (before insert, before update,after insert, after update,after delete, after undelete) {

    if (Trigger.isBefore && Trigger.isInsert) {
        ContactTriggerHandler.onBeforeInsert(Trigger.new);
    }
    if (Trigger.isBefore && Trigger.isUpdate) {
        ContactTriggerHandler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
    }

    if (Trigger.isAfter && Trigger.isInsert) {
        ContactTriggerHandler.onAfterInsert(Trigger.new, Trigger.newMap);
    }

    if (Trigger.isAfter && Trigger.isUpdate) {
        ContactTriggerHandler.onAfterUpdate(Trigger.new, Trigger.oldMap);
    }
    
    if (Trigger.isAfter && Trigger.isDelete) {
        ContactTriggerHandler.onAfterDelete(Trigger.old, Trigger.oldMap);
    }
    
    if (Trigger.isAfter && Trigger.isUndelete) {
        ContactTriggerHandler.onAfterUndelete(Trigger.new);
    }
}