import { LightningElement,track } from 'lwc';
import getBusData from '@salesforce/apex/BusData.getBusData';

// Import message service features required for publishing and the message channel


export default class BusList extends LightningElement {
    @track busData;
    @track errors;
    connectedCallback(){
        getBusData()
        .then(result=>{
            this.busData = result;
        })
        .catch(error=>{
            this.errors = error;
        })
    }
   
}