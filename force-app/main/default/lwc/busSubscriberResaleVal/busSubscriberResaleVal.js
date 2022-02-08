import { LightningElement, track} from 'lwc';
// Import message service features required for publishing and the message channel
import {createMessageContext,subscribe,unsubscribe,APPLICATION_SCOPE } from 'lightning/messageService';
import BusMC1 from '@salesforce/messageChannel/BusMessageChannel__c';
import getBusData from '@salesforce/apex/BusData.getBusData';
import Resale_Value from '@salesforce/schema/Bus__c.Resale_Value__c';

export default class BusSubscriberRetailVal extends LightningElement {
    context = createMessageContext();
    subscription = null;
    @track busId;
    @track objectApiName='Bus__c';
    fields = [Resale_Value];
    connectedCallback(){
        this.subscribeMC();
    }
    subscribeMC(){
        if(this.subscription){
            return;
        }
        this.subscription = subscribe(this.context, BusMC1,(message) => {
            this.handleMessage(message);
        }),{scope: APPLICATION_SCOPE};
    }
    handleMessage(message){
        this.busId = message.recordId;
    }
   
}