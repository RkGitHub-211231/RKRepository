import { LightningElement,track,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountData.getAccounts';
export default class DisplayAccounts extends LightningElement {
    @track data;
    @wire(getAccounts) accountRecords({error,data}){

        if(data){
            this.data=data;
        }
        else if(error){
            this.data=undefined;
        }
    }
}