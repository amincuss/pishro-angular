import { MessageService } from 'primeng/api';
import { Customer } from '../model/Customer';
/* tslint:disable:no-unused-variable */

import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { CustomerService } from './customer.service';

describe('CustomersService', () => {
  let service: CustomerService;
  let httpSpy: Spy<HttpClient>;
  let fakeCustomers: Customer[] = [
    {
      id:12,
      BankAccountNumber:56966,
      Email:"a@yahoo.com",
      Firstname:"amin",
      Lastname:"sharifi",
      PhoneNumber:9128177862,
      DateOfBirth:"2021-03-01"
    },
    {
      id:13,
      BankAccountNumber:5696,
      Email:"a@yahoo.com",
      Firstname:"amin",
      Lastname:"sharifi",
      PhoneNumber:9128177862,
      DateOfBirth:"2021-03-01"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerService,MessageService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });
    
    service = TestBed.inject(CustomerService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' delete an existing customer', (done: DoneFn) => {

    httpSpy.delete.and.nextWith(new HttpResponse ({
      status: 200
    }));

    service.delete(1).subscribe(
      response => {
        expect(response.status).toEqual(200);
        done();
      },
      done.fail
    );
    expect(httpSpy.delete.calls.count()).toBe(1);
  });

  it(' create a new customer', (done: DoneFn) => {
    
    var newCustomer = {
      id:16,
      BankAccountNumber:56961112,
      Email:"amol@yahoo.com",
      Firstname:"reza",
      Lastname:"ahmadi",
      PhoneNumber:9365948793,
      DateOfBirth:"2021-03-01"
    } as Customer;

    httpSpy.post.and.nextWith(newCustomer);

    service.create(newCustomer).subscribe(
      customer => {
        expect(customer).toEqual(newCustomer);
        done();
      },
      done.fail
    );
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('get list of all customer', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeCustomers);

    service.getAll().subscribe(
      customers => {
        expect(customers).toHaveSize(fakeCustomers.length);
        done();
      },
      done.fail
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });

 

  it(' update a customer with  customer id', (done: DoneFn) => {
    
    var customer = fakeCustomers[0];
    customer.Firstname = "Updated Customer";

    httpSpy.put.and.nextWith(customer);

    service.update(1,customer).subscribe(
      customer => {
        expect(customer.Firstname).toEqual("Updated Customer");
        done();
      },
      done.fail
    );
    expect(httpSpy.put.calls.count()).toBe(1);
  });

 
});
