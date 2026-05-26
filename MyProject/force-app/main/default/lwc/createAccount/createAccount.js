import { LightningElement } from 'lwc';
import CREATE_ACC from '@salesforce/apex/CreateAccountController.createAccount';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
export default class CreateAccount extends NavigationMixin(LightningElement) {

  acc = {};
  isIndustryRequred = false;
  AnnualRevenueValue=700000;
  typeValueSwapnadip='';
  runSpinner=false;

  handleNameChange(event) {

    this.acc.Name = event.target.value;
    console.log('this.acc==> ' + JSON.stringify(this.acc));

  }

  handleRevenueChange(event) {
    this.acc.AnnualRevenue = event.target.value;
    if(event.target.value > 100000){
      this.typeValueSwapnadip= 'Other';
    }
  }
  handleTypeChange(event) {
    this.acc.Type = event.target.value;
    if (event.target.value == 'Prospect') {
      this.isIndustryRequred = true;
      this.AnnualRevenueValue =1000000;
    }else{
      this.isIndustryRequred = false;
      this.AnnualRevenueValue =null;
    }

  }

  handleIndustryChange(event) {
    this.acc.Industry = event.target.value;

  }
  handleSave() {
    this.runSpinner =true;
    if (this.acc.Name == 'Swapnadip') {
      this.runSpinner = false;
      this.showToast('Error..!',"Account Name Can not be Swapnadip.",'error');
      return;
    }
    console.log('handleSave called===> ' + JSON.stringify(this.acc))
    CREATE_ACC({ accRecord: this.acc }).then(result => {

      console.log('result==> ' + result);

      if (result) {
        
        this.showToast('Success..!',"Account Created Successfully, record Id of Account is "+ result,'success');
        setTimeout(() => {
           this.navigateTorecordPage(result);
        }, 10000);
        
      }

    }).catch(error => {
      this.runSpinner = false;
      console.log('error==> ' + JSON.stringify(error.body.message));

      this.showToast('Error..!',error.body.message,'error');
    })

  }



  showToast(headingOfError,ActualErrorMessage,variantOfError){

        const myMessage = new ShowToastEvent({
        title: headingOfError,
        message:ActualErrorMessage,
        variant: variantOfError

      });
      this.dispatchEvent(myMessage);

  }


  navigateTorecordPage(resultRecordId){
    this.runSpinner = false;
      console.log('navigateTorecordPage called ..!')

        this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: resultRecordId,
        objectApiName: "Account", // objectApiName is optional
        actionName: "view",
      },
    });
  }


}