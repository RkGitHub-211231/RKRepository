trigger Bus_Maintenance on Bus__c (after update) {
   
    if(Trigger.isAfter){
        
         BMRCreation.createBMR(Trigger.new,Trigger.oldMap);
        
    }
    
}