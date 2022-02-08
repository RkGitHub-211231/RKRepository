public with sharing class ClassForImperativeMethodCall {
    public ClassForImperativeMethodCall() {

    }
    @AuraEnabled(cacheable=true)
    public static list<account> retriveAccounts(){
       return [select id,Name,Industry,Phone from account limit 10];
    }
}