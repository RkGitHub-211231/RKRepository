public with sharing class AccountData {
    public AccountData() {

    }
    @AuraEnabled(cacheable=true)
    
    public static list<Account> getAccounts(){
            return [select id,Name,phone,type,industry from account limit 10];

    }
}