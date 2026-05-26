trigger AccountTrigger on Account (before insert,before update, after insert, after update) {

    if (Trigger.isBefore) {

        if (Trigger.isInsert) {
            AccountTriggerHandler.onBeforeInsert(Trigger.new);
        }

        if (Trigger.isUpdate) {
            AccountTriggerHandler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
        }
    }

    if (Trigger.isAfter) {

        if (Trigger.isInsert) {
            //AccountTriggerHandler.onAfterInsert(Trigger.new);
        }

        if (Trigger.isUpdate) {
            AccountTriggerHandler.onAfterUpdate(Trigger.new, Trigger.oldMap);
        }
    }
}