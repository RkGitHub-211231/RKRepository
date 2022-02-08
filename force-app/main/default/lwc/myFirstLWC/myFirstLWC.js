import { LightningElement,api,track } from 'lwc';

export default class MyFirstLWC extends LightningElement {
    @api name = 'Swapna';
    @track title = 'SFDC';
    email = 'swapna@gmail.com';
    phone = '54787878454';
}