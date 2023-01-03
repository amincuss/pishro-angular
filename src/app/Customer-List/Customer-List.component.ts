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

@Component({
  selector: 'app-Customer-List',
  templateUrl: './Customer-List.component.html'

})
export class CustomerListComponent implements OnInit {
 public customer!: Customer[];
  selectedCustomer!: Customer;
   mydata:any;
   public userlist!:Userlist[];
  constructor(private customerService: CustomerService, private router: Router, private primengConfig: PrimeNGConfig, private messageService: MessageService, public dialogService: DialogService) {
  }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => {
      this.mydata = data.customerlist;  
    });
   
    this.primengConfig.ripple = true;
  }

  onRowSelect($event: any) {
  
    this.router.navigate(['customer', $event.data.id]);
  }



  openCreateModal() {
    const ref = this.openModal(new Userlist(), 'Add customer');
    ref.onClose.subscribe((userlist: Userlist) => {
      if (userlist) {
        this.customerService.create(userlist).subscribe(data => {
          console.log(data);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Customer created'});
        });
      }
    });
  }



  openModal(userlist: Userlist, header: string): DynamicDialogRef {

    return this.dialogService.open(CustomerModalComponent, {
      data: {userlist},
    
      header,
      contentStyle: {'max-height': '800px', 'overflow': 'auto'},
      baseZIndex: 10000
    });
  }

}
