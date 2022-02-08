import { LightningElement,track } from 'lwc';

export default class LwcCalculator extends LightningElement {
    firstnumber;
    secondnumber;
    @track result;
    handlechanges(event){

        if(event.target.number==this.firstnumber){
            this.firstnumber=event.target.value;
        }
        if(event.target.number==this.secondnumber){
            this.secondnumber=event.target.value;
        }
        this.result=parseInt(this.firstnumber)*parseInt(this.secondnumber);
    }

}