import { LightningElement,api} from 'lwc';

export default class SelectFeilds extends LightningElement {
    
    @api retrievedFields=[];
    Remove(event){

        console.log(event.target.value);

    }

}