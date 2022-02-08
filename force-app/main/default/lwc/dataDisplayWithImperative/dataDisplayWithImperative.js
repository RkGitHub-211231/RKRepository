import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountDataRetrieval.getAccRecordList';
export default class DataDisplayWithImperative extends LightningElement {
    @track accountRecords;
    @track columns = [
        {label: 'Name', fieldName: 'Name', type: 'text'},
        {label: 'Industry', fieldName: 'Industry', type: 'text'}
    ]
    connectedCallback(){
        getAccounts()
            .then(result=>{
                this.accountRecords = result;
            })
            .catch(error=>{
                this.accountRecords = error;
            })
        }
    }