import { APPLICATION_SCOPE, createMessageContext, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement,track } from 'lwc';

import BusMessageChannel from "@salesforce/messageChannel/BusMessageChannel__c"
import YEAR_Feild from '@salesforce/schema/Bus__c.Year__c';
import MAXIMUM_CAPACITY_Feild from '@salesforce/schema/Bus__c.Maximum_Capacity__c';
import ODOMETER_READING_Feild from '@salesforce/schema/Bus__c.Odometer_Reading__c';
export default class Detail extends LightningElement {
    context=createMessageContext();
    subscription= null;
    @track objectApiName='Bus__c';
    fields=[YEAR_Feild,MAXIMUM_CAPACITY_Feild,ODOMETER_READING_Feild];
    @track busId;
    connectedCallback(){

        this.subscribeMC();

    }

    subscribeMC(){
        if(this.subscription){
            return;
        }
        this.subscription= subscribe(this.context,BusMessageChannel,(message)=>{
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});
    }

    handleMessage(message){
        this.busId=message.recordId;
    }

}