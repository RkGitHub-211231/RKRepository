import { LightningElement,track,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountData.getAccounts';

export default class DataTableOfAccounts extends LightningElement {

    @track data;
    @track columns=[
        {label:'phone', feildName:'phone', type:'phone'},
        {label:'label', feildName:'name', type:'text'},
        
        
        ];
    @wire (getAccounts) accountRecords({error,data}){

        if(data){
            this.data=data;
        }
        else if(error){
            this.data=undefined;
        }
    }
}