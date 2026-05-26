trigger TeacherTrigger on Teacher__c (before insert,after insert, after update, before delete, after delete , after undelete){
    system.debug('isinsert====>  ' + trigger.isinsert);
    system.debug('isudate===> ' + trigger.isupdate);
    system.debug('isdelete===>' + trigger.isdelete);
    system.debug('isundelete===> '+ trigger.isundelete);
    
    
    system.debug('isbefore====>  ' + trigger.isbefore);
    system.debug('isafter====>  ' + trigger.isafter);
    
    system.debug('operation Type==>' +trigger.operationType);
    
    system.debug('trigger.new ==> ' +trigger.new );
    system.debug('trigger.NewMap== > ' + trigger.newMap);
    system.debug('trigger.Old==> '+ trigger.old);
    system.debug('trigger.OldMap==>' + trigger.oldMap);

}