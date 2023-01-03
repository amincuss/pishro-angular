import { MessageService } from 'primeng/api';
import { CustomerService } from '../service/customer.service';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomerListComponent } from "./Customer-List.component";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogService } from 'primeng/dynamicdialog';

describe("CustomerListComponent", () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let myService: CustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: CustomerService},{ provide: MessageService},{ provide: DialogService, useValue: {} }],
      imports: [  HttpClientModule,
          RouterTestingModule
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(CustomerService);
  });

  describe('method1', () => {
    it('Customer List ok', () => {
      expect(component).toBeTruthy();
    });
  });
})