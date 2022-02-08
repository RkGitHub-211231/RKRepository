import {LightningElement,track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountDataRetrieval.getAccounts'
export default class DisplayDataUsingWire extends LightningElement {
    @track Data;
    @wire(getAccounts) accountRecords({error,data}){
        if(data){
            this.Data=data;
        }
        else if (error){
            this.Data=undefined;
        }
    }
}