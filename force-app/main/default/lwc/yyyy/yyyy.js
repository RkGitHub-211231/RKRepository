import { LightningElement, track} from 'lwc';

import getBusData from '@salesforce/apex/BusInfo.getBusData';



export default class BusTile extends LightningElement {

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