import { LightningElement, track } from 'lwc';

import retriveAccounts from '@salesforce/apex/ClassForImperativeMethodCall.retriveAccounts';
export default class ImperativeMethodDataDisplay extends LightningElement {

    @track data;
    @track error;
    @track columns=[
        {label:'Phone',feildName:'Phone',type:'phone'},
        {label:'Name',feildName:'Name',type:'text'},
        {label:'Industry',feildName:'Industry',type:'picklist'},
        
        ];
    connectedCallback(){
        retriveAccounts()
        .then(result=>{this.data=result;})
        .catch(error=>{this.error=error;})
    }
}