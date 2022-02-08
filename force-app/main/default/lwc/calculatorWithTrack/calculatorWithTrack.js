import { LightningElement,track} from 'lwc';

export default class CalculatorWithTrack extends LightningElement {
    firstnumber;
    secondnumber;
    @track result=0;
    handleChanges(event){
        if(event.target.name==='fnumber'){
            this.firstnumber=event.target.value;
        }
        if(event.target.name==='snumber'){
            this.secondnumber=event.target.value;
        }
        this.result=parseInt(this.firstnumber)+parseInt(this.secondnumber);
    }
}