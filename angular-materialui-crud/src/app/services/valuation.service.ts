import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuationService {

  constructor(private _http: HttpClient) {}

  saveValuation(data: any): Observable<any> {
    return this._http.post('http://localhost:8082/api/valuationapplication', data);
  }

  getValuationApplication(): Observable<any> {
    return this._http.get('http://localhost:8082/api/valuationapplication/');
  }

  updateValuation(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8082/api/valuationapplication/${id}`, data);
  }

  /*
  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:4200/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:4200/employees/${id}`);
  }*/
}
