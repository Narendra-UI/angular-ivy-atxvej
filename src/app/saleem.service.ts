import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaleemService {
  count = 1;
  result: any = [
    {
      id: 1,
      name: 'sallem',
      contact: '9876543210',
      email: 'asdfg@gmail.com',
      gender: 'male',
    },
  ];

  ref: any;
  add(a, b) {
    return a + b;
  }
  sub(x, y) {
    return x - y;
  }

  constructor() {}
}
