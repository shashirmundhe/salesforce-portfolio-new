import { LightningElement, wire } from 'lwc';
import getOpps from '@salesforce/apex/SearchOppController.getOpps';

export default class SearchOpp extends LightningElement {

    fetchedOpps = [];
    searchKey = '';

    handleSearch(event) {
        this.searchKey = event.target.value;

        if (!this.searchKey) {
            this.fetchedOpps = [];
        }

        console.log("searchKey ==> " + this.searchKey);
    }

    @wire(getOpps, { searchKey: '$searchKey' })
    resultOpp({ data, error }) {
        if (data) {
            this.fetchedOpps = data;
            console.log('FetchedOpps ==> ' + JSON.stringify(this.fetchedOpps));
        } else if (error) {
            console.log('Error in SearchOpp ==> ' + JSON.stringify(error));
            this.fetchedOpps = [];
        }
    }
}