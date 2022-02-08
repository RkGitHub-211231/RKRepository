public with sharing class BusInfo {
    public BusInfo() {

    }
    @AuraEnabled

    public static List<Bus__c> getBusData(){

       return [select id,Bus_Image__c,Picture__c From Bus__c];

    }
}