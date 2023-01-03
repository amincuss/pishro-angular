import { Component, Input, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators,ValidatorFn, AbstractControl} from '@angular/forms';
// PrimeNG imports
import {PrimeNGConfig} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
// Local imports
import { Userlist } from '../model/userlist';
import { CustomerService } from '../service/customer.service';
@Component({
  selector: 'app-Customer-modal',
  templateUrl: './Customer-modal.component.html'
})
export class CustomerModalComponent implements OnInit {
  userList: Userlist[] = [];
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
  userlist: Userlist;
  userListForm!: FormGroup;
  constructor(private primengConfig: PrimeNGConfig, public ref: DynamicDialogRef, public config: DynamicDialogConfig,private customerService: CustomerService) {
    this.userlist = this.config.data.userlist;
if(this.config.header=="Add customer"){


      this.userListForm = new FormGroup({

      name: new FormControl(this.userlist.name, [Validators.required]),
      family: new FormControl(this.userlist.family, [Validators.required]),
      mobile: new FormControl(this.userlist.mobile, [ Validators.required]),
      codeMelli: new FormControl(this.userlist.codeMelli, [Validators.required]),
      address:new FormControl(this.userlist.address,[Validators.required]),
    });

  }


  
  }    

  onSubmit() {

    this.formValuesToCountry();
    this.ref.close(this.userlist);
  }

  hideDialog() {
    this.ref.close(null);
  }

  formValuesToCountry() {
    this.userlist = this.userListForm.getRawValue();
  }
  handleNumberChange() {  
  

 
  
  
}
ngOnInit() {
  
}




    


}