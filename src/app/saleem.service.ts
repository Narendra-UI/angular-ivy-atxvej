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
      aadhaar: '876543219879',
      email: 'asdfg@gmail.com',
      gender: 'male',
    },
  ];

  constructor() {}
}
