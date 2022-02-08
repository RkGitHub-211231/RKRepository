public with sharing class AccountDataRetrieval {
    public AccountDataRetrieval() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        List<Account> accList = [select id,Name from Account limit 10];
        return accList;
    }
    @AuraEnabled
    public static List<Account> getAccRecordList(){
        return  [select id,Name from Account limit 10];
    }
}