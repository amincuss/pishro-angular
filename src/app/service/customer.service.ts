// Angular imports
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// Local imports
import {Customer} from '../model/Customer';
import {Userlist} from '../model/userlist';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:5166/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/Customer/GetAllCustomer');
  }



  create(userlist: Userlist) {

    let body = JSON.stringify(userlist);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    
    console.log(body);
    return this.http.post<any>(this.baseUrl+'/Customer/AddCustomer',body,httpOptions);
  }


}
