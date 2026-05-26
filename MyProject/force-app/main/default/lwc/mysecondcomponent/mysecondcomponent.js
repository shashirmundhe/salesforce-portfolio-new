import { LightningElement } from 'lwc';

export default class MySecondComponent extends LightningElement {

   result=[];
   
  contacts = [
    { id: '1', fullName: 'Rahul Sharma', status: 'Active', age: 28 },
    { id: '2', fullName: 'Priya Mehta', status: 'Inactive', age: 25 },
    { id: '3', fullName: 'Amit Verma', status: 'Active', age: 30 }
  ];

  enableForLoop=false;

   addElement(){
     var arr1 = [1, 2, 3];
      console.log('arr1 before ==> ' +arr1);
     
      var arr2=[...arr1];
     
     arr2.push(4);

     console.log('arr1 after==> ' +arr1);
     console.log('arr2==> ' +arr2);
  
     this.result=arr2;
    console.log('method called addElement' +this.result);


   }

   callForLoop(){
    
      for(let con of this.contacts){

        console.log('contact: ' +JSON.stringify(con))

      }

   }

    callForEachLoopShashiKant(){

      this.contacts.forEach( (item)=>{

          console.log('contact: ' +JSON.stringify(item.age))

      });
      
    }

    runHTMLLoop(){
      
      this.enableForLoop=true;

      console.log('run html for loop called..!');

    }


    runJsMap(){

     const nums = [1, 2, 3];

    if(nums.includes(2)){
            console.log('2 is present in array nums');

    }

     const doubled = nums.map(n => n * 2);

      const newArray = this.contacts.map((item) => {
            return {...item, label : item.fullName +' ' + item.status +' SalesForce'}
      }
        
      )

      console.log('newArray===> ' +JSON.stringify(newArray));
   

    }


    runJsFilter(){

      const activeContacts = this.contacts.filter( (item) => {
        return item.status == 'Active'
      }
      )

      console.log('activeContacts===> ' +JSON.stringify(activeContacts));


    }


    runJsFindFunction(){
      const contactWIthAge25 = this.contacts.find( (item) =>
        item.age == 25
      )

      console.log('contactWIthAge25===> ' +JSON.stringify(contactWIthAge25));

    }


    runSortFunction(){

      const descendingContactAge = [...this.contacts].sort( (a,b) => a.age - b.age);
      console.log('descendingContactAge===> ' +JSON.stringify(descendingContactAge));
      console.log('descendingContactAge size===> ' + descendingContactAge.length);
      console.log('this.contacts size ===> ' + this.contacts.length);

    }






}