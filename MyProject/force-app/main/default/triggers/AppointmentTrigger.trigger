trigger AppointmentTrigger on Appointment__c (before insert, before update) {
    if(trigger.isbefore && trigger.isinsert){
        AppointmentTriggerHandler.oninsertappointment(trigger.new);
        system.debug('outputof trigger  '+ trigger.new);
    }
    
    if(trigger.isbefore && trigger.isupdate){
        AppointmentTriggerHandler.onupdateappointment(trigger.new);
        system.debug('ooutpur of update trigger '+ trigger.new);	
    }

}