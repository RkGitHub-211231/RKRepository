import { LightningElement } from 'lwc';

//import ACCOUNT_ID from '@salesforce/account/Id';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_OWNER from '@salesforce/schema/Account.OwnerId';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordForm extends LightningElement {
    objectApiName='Account';
    selectedFields = [ACCOUNT_NAME, ACCOUNT_TYPE, ACCOUNT_OWNER];
    showSuccessNotification(event) {
        const evt = new ShowToastEvent({
            title: "Success",
            message: "Record Id: " + event.detail.id,
            variant: "success",
        });
        this.dispatchEvent(evt);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Account',
                actionName: 'view'
            },
        });
    }
}