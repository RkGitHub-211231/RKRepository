import { api, LightningElement,track } from 'lwc';
import getSumResult from '@salesforce/apex/Calculate2Num.getSumResult';
export default class PaaParametersToMethod extends LightningElement {
    @track fNum;
    @track sNum;
    @track sum;
    @api greeting;
    @api title;
    handleChange(event){
        if(event.target.name === "fstNumber"){
            this.fNum = event.target.value;
        }
        if(event.target.name === "sndNumber"){
            this.sNum = event.target.value;
        }
    }
    handleResult(){
        getSumResult({firstNumber:this.fNum,secondNumber:this.sNum})
        .then(result =>{
            this.sum = result;
        } )
        .catch(error => {
            this.sum = error;
        })
    }



}