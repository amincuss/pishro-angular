import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AddInvoice } from '../model/AddInvoice';
import { UpdateInvoice } from '../model/UpdateInvoice';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrl = 'http://localhost:5166/api/invoice';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/GetAllInvoiceProduct');
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(addinvoice: AddInvoice) {
   let body=  JSON.stringify({"invoiceNumber":Number(addinvoice.InvoiceId),
   "productName":addinvoice.ProductName,
   "productNumber":Number( addinvoice.ProductNumber),
   "productCost":Number( addinvoice.ProductCost)});
console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<any>(this.baseUrl+ '/AddInvoiceProduct', body,httpOptions);
  }

  update(updateinvoice:UpdateInvoice): Observable<any> {
    let body=  JSON.stringify({"invoiceRegisterId":Number( updateinvoice.InvoiceRegisterId),"isDeleted":false,
      "invoiceId":Number(updateinvoice.InvoiceId),
   "productName":updateinvoice.ProductName,
   "productNumber":Number( updateinvoice.ProductNumber),
   "productCost":Number( updateinvoice.ProductCost)});
   console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<any>(this.baseUrl + '/UpdateInvoiceProduct' , body,httpOptions);
  }

  delete(id: number) {
    return this.http.delete<any>(this.baseUrl + '/DeleteInvoiceProduct/' + id);
  }

}
