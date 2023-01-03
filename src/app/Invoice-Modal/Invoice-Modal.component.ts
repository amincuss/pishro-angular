import { Component, Input, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators,ValidatorFn, AbstractControl} from '@angular/forms';
// PrimeNG imports
import {PrimeNGConfig} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import { Invoice } from '../model/Invoice';
// Local imports
import { CustomerService } from '../service/customer.service';
import { InvoiceService } from '../service/Invoice.service';

@Component({
  selector: 'app-Invoice-Modal',
  templateUrl: './Invoice-Modal.component.html',
  styleUrls: ['./Invoice-Modal.component.css']
})
export class InvoiceModalComponent implements OnInit {
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
  invoice: Invoice;
  invoiceForm!: FormGroup;
  constructor(private primengConfig: PrimeNGConfig, public ref: DynamicDialogRef, public config: DynamicDialogConfig,private invoiceService: InvoiceService) {
    this.invoice = this.config.data.invoice;
if(this.config.header=="Add invoice"){


      this.invoiceForm = new FormGroup({
        InvoiceRegisterId:new FormControl(this.invoice.invoiceRegisterId),

        InvoiceId: new FormControl(this.invoice.invoiceId, [Validators.required]),
        ProductName: new FormControl(this.invoice.productName, [Validators.required]),
        ProductNumber: new FormControl(this.invoice.productNumber, [ Validators.required]),
        ProductCost: new FormControl(this.invoice.productCost, [Validators.required]),
    });

  }else{



    this.invoiceForm = new FormGroup({
      InvoiceRegisterId:new FormControl(this.invoice.invoiceRegisterId),

      InvoiceId: new FormControl(this.invoice.invoiceId, [Validators.required]),
      ProductName: new FormControl(this.invoice.productName, [Validators.required]),
      ProductNumber: new FormControl(this.invoice.productNumber, [ Validators.required]),
      ProductCost: new FormControl(this.invoice.productCost, [Validators.required]),
  });





  }


  
  }    

  onSubmit() {

    this.formValuesToCountry();
    this.ref.close(this.invoice);
  }

  hideDialog() {
    this.ref.close(null);
  }

  formValuesToCountry() {
    this.invoice = this.invoiceForm.getRawValue();
  }
  handleNumberChange() {  
  

 
  
  
}
ngOnInit() {
  
}




    


}