import {Component, OnInit} from '@angular/core';
import {OrderService} from './services/order.service';
import {Order} from './models/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  indexEdit: number | null = null;
  editMode = false;
  orders: Order[];
  orderToAdd: Order = new Order();
  constructor(private orderService: OrderService) {
    this.orderService.getAllOrders().subscribe(result => this.orders = result);
  }

  ngOnInit(): void {
    if (localStorage.todos) {
    }
  }

  addApi(order: Order) {
    this.orderService.addOrder(order).subscribe(result => {
      this.orderService.getAllOrders().subscribe(c => this.orders = c);
    });
  }

  updateApi(id: number) {
    this.orderService.updateOrder(id).subscribe(result => {
      this.orderService.getAllOrders().subscribe(c => this.orders = c);
    });
  }

  deleteApi(id: number) {
    this.orderService.deleteOrder(id).subscribe(result => {
      this.orderService.getAllOrders().subscribe(c => this.orders = c);
    });
  }

}
