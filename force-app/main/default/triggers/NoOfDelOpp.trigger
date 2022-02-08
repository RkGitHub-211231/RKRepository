trigger NoOfDelOpp on Opportunity (after delete) {
	 Map<Id,String> mapAcc = new Map<Id,String>();
      List<Id> accId = new List<Id>();
      for(Opportunity con : Trigger.Old){
           accId.add(con.AccountId);
      }
      List<Account> acc = [Select Id,No_Of_DelCons__c from Account where Id in: accID];
     for(Account a : acc){
	 a.No_Of_DelCons__c = a.No_Of_DelCons__c+1;
     }
}