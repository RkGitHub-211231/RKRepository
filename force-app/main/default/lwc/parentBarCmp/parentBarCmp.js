import { LightningElement,track } from 'lwc';

export default class parentBarCmp extends LightningElement {
    @track barVal = 10;
    passToParent(event){
        this.barVal = event.detail;
    }
}