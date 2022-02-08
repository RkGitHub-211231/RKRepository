import { LightningElement,api } from 'lwc';

import Contact__Phone from '@salesforce/schema/Contact.Phone';
import Contact__FirstName from '@salesforce/schema/Contact.FirstName';
import Contact__LastName from '@salesforce/schema/Contact.LastName';
import Contact__Email from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactUpdate extends LightningElement {



@api recordId;
@api objectApiName;
selectedFields=[Contact__Phone,Contact__FirstName,Contact__Email,Contact__LastName]
showSuccessNotification(event) {
    const evt = new ShowToastEvent({
        title: "Success",
        message: "Record is succesfully updated",
        variant: "success",
    });
}
}