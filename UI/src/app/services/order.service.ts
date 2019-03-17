import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/order/get');
  }

  addOrder(order: Order): Observable<void> {
    return this.http.post<void>('/api/order/add', order);
  }

  updateOrder(id: number): Observable<void> {
    // const httpParams = new HttpParams().set('id', id.toString());
    // const options = { params: httpParams };
    return this.http.patch<void>('/api/order/update?id=' + id.toString(),  '' );
  }

  deleteOrder(id: number): Observable<void> {
    const httpParams = new HttpParams().set('id', id.toString());
    const options = { params: httpParams };
    return this.http.delete<void>('/api/order/delete', options);
  }
}
