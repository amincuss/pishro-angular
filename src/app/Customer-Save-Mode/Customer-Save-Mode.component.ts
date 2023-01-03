import { PhoneNumberUtil } from 'google-libphonenumber';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators,ValidatorFn, AbstractControl} from '@angular/forms';
// PrimeNG imports
import {PrimeNGConfig} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
// Local imports
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer.service';
const phoneNumberUtil = PhoneNumberUtil.getInstance();
@Component({
  selector: 'app-Customer-Save-Mode',
  templateUrl: './Customer-Save-Mode.component.html'

})

export class CustomerSaveModeComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  customerlist: Customer[] = [];
public idGen!:number;
IsActive:boolean=false;
 phoneError!:string;
 emailError!:string;
 lastNameError!:string;
 firtsNameError!:string;
 BirthError!:string;
 public internationalNumber="+12012987481";
  @Input() showDialog!: boolean;
  @Input() header!: string;
  customer: Customer;
  customerForm: FormGroup;

  constructor(private primengConfig: PrimeNGConfig, public ref: DynamicDialogRef, public config: DynamicDialogConfig,private customerService: CustomerService) {
    this.customer = this.config.data.customer;
if(this.config.header=="Add customer"){


      this.customerForm = new FormGroup({
       id: new FormControl(this.customer.id),

      Firstname: new FormControl(this.customer.Firstname, [Validators.required,this.FirtsNameUniqValidator()]),
      Lastname: new FormControl(this.customer.Lastname, [Validators.required,this.LastNameUniqValidator()]),
      PhoneNumber: new FormControl(this.customer.PhoneNumber, [ this.PhoneNumberValidator('US')]),
      DateOfBirth: new FormControl(this.customer.DateOfBirth, [Validators.required,this.BirthUniqValidator()]),
      BankAccountNumber:new FormControl(this.customer.BankAccountNumber,[Validators.pattern("^[0-9]{10}$")]),
     Email: new FormControl(this.customer.Email, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),this.EmailUniqValidator()])
    });

  }
  else{


    this.customerForm = new FormGroup({
      id: new FormControl(this.customer.id),

     Firstname: new FormControl(this.customer.Firstname, [Validators.required]),
     Lastname: new FormControl(this.customer.Lastname, [Validators.required]),
     PhoneNumber: new FormControl(this.customer.PhoneNumber, [ this.PhoneNumberValidator('US')]),
     DateOfBirth: new FormControl(this.customer.DateOfBirth, [Validators.required]),
     BankAccountNumber:new FormControl(this.customer.BankAccountNumber,[Validators.pattern("^[0-9]{10}$")]),
    Email: new FormControl(this.customer.Email, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
   });



  }

    
     this.primengConfig.ripple = true;

   


  
  }    

  onSubmit() {

    this.formValuesToCountry();
    this.ref.close(this.customer);
  }

  hideDialog() {
    this.ref.close(null);
  }

  formValuesToCountry() {
    this.customer = this.customerForm.getRawValue();
  }
  handleNumberChange() {  
  

 
  
  
}
ngOnInit() {
  this.customerService.getAll().subscribe(data => this.customerlist = data);    
  this.handleNumberChange();
}
PhoneNumberValidator(regionCode: string ): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } |null=> {
    let validNumber = true;
    try {
      const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
        control.value, regionCode
      );
      validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
      if(validNumber){
        this.phoneError="";
validNumber=true;
      }else{
this.phoneError="Please Inter Correct Us Phone format Number";

validNumber=false;

      }
    } catch (e) { }

    return validNumber ? null : { 'wrongNumber': { value: control.value } };
  }
}
EmailUniqValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any  }|null => {
    let validEmail = false;
    try {
      for( let i=0;i<this.customerlist.length;i++){
        if(this.customerlist[i].Email.includes(String(control.value))){
        
           validEmail = false;
        this.emailError="Error: Email exists in database";
        break;
        }else{
          this.emailError="";
          validEmail = true;

        }
        
        
        }
    
    } catch (e) { }

    return validEmail ? null : { 'wrongNumber': { value: control.value } };
  }
}
LastNameUniqValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any }|null => {
    let validLastName = false;
    try {
      
      for( let i=0;i<this.customerlist.length;i++){
        if(this.customerlist[i].Lastname.includes(String(control.value))){
        
          validLastName = false;
        this.lastNameError="Error: LastName exists in database";
        break;
        }else{
          this.lastNameError="";
          validLastName = true;
        }
        
        
        }
    } catch (e) { }

    return validLastName ? null : { 'wrongNumber': { value: control.value } };
  }
}
FirtsNameUniqValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } |null=> {
    let validFirtsName = false;
    try {

      for( let i=0;i<this.customerlist.length;i++){
if(this.customerlist[i].Firstname.includes(String( control.value))){

   validFirtsName = false;
this.firtsNameError="Error: FisrtName exists in database";
break;
}else{
  this.firtsNameError="";
  validFirtsName = true;

}


}
    
    } catch (e) { }
console.log(validFirtsName);
    return validFirtsName ? null : { 'wrongNumber': { value: control.value } };
  }
}
BirthUniqValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } |null=> {
    let validBirth = false;
    try {
      for( let i=0;i<this.customerlist.length;i++){
        if(this.customerlist[i].DateOfBirth.includes(control.value)){
        
           validBirth = false;
        this.BirthError="Error: Birthday exists in database";
        break;
        }else{
          this.BirthError="";
          validBirth = true;

        }
        
        
      }
    
    } catch (e) { }

    return validBirth ? null : { 'wrongNumber': { value: control.value } };
  }
}
}