import { PhoneNumber, PhoneNumberUtil } from 'google-libphonenumber';
// Angular imports
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// PrimeNG imports
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
// Local imports
import { Customer } from './../model/Customer';

import { CustomerService } from '../service/customer.service';
import { CustomerSaveModeComponent } from '../Customer-Save-Mode/Customer-Save-Mode.component';
import { Userlist } from '../model/userlist';
import { CustomerModalComponent } from '../Customer-modal/Customer-modal.component';
import { InvoiceService } from '../service/Invoice.service';
import { AddInvoice } from '../model/AddInvoice';
import { Invoice } from '../model/Invoice';
import { InvoiceModalComponent } from '../Invoice-Modal/Invoice-Modal.component';
import { UpdateInvoice } from '../model/UpdateInvoice';

@Component({
  selector: 'app-Invoice-List',
  templateUrl: './Invoice-List.component.html',
  styleUrls: ['./Invoice-List.component.css']
})
export class InvoiceListComponent implements OnInit {
  public invoice!: Invoice[];
   selectedInvoice!: Invoice;
    mydata:any;
   
   constructor(private invoiceService: InvoiceService, private router: Router, private primengConfig: PrimeNGConfig, private messageService: MessageService, public dialogService: DialogService) {
   }
 
   ngOnInit() {
     this.invoiceService.getAll().subscribe(data => {
       this.mydata = data.list;  
     });
    
     this.primengConfig.ripple = true;
   }
 
   onRowSelect($event: any) {
   
     this.router.navigate(['customer', $event.data.id]);
   }
 
   deleteinvoice(invoice: Invoice) {
    this.invoiceService.delete(invoice.invoiceRegisterId).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Customer deleted'});
    });
  }
 
   openCreateModal() {
     const ref = this.openModal(new Invoice(), 'Add Invoice');
     ref.onClose.subscribe((addinvoice: AddInvoice) => {
       if (addinvoice) {
         this.invoiceService.create(addinvoice).subscribe(data => {
          console.log(data);
           this.messageService.add({severity: 'success', summary: 'Success', detail: 'Customer created'});
         });
       }
     });
   }
   openEditModal(selectedInvoice: Invoice) {
   
    const ref = this.openModal(selectedInvoice, 'Edit Invoice');
    ref.onClose.subscribe((invoice: UpdateInvoice) => {
      if (invoice) {
        console.log(invoice);
        this.invoiceService.update(invoice).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Customer updated'});
        });
      }
    });
  }
 
 
   openModal(invoice: Invoice, header: string): DynamicDialogRef {
 console.log(invoice);
     return this.dialogService.open(InvoiceModalComponent, {
       data: {invoice},
     
       header,
       contentStyle: {'max-height': '900px', 'overflow': 'auto'},
       baseZIndex: 10000
     });
   }
 
 }
 