trigger CalculateBusResaleValue on Bus__c (before insert,after update) {
    
    if(trigger.isBefore){
        Resale.calculateResaleVal(trigger.new);    
    }
    else{
        Resale.calculateResaleValAfterUpdate(trigger.new,trigger.oldMap);
    }
}