public with sharing class Calculate2Num {
    public Calculate2Num() {

    }
    @AuraEnabled
    public static Integer getSumResult(Integer firstNumber,Integer secondNumber) {
       return (firstNumber+secondNumber);
    }
}