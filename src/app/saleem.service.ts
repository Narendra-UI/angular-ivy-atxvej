import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaleemService {
  result: any = [
    {
      name: 'sallem',
      contact: '9876543210',
      aadhaar: '876543219879',
      email: 'asdfg@gmail.com',
      gender: 'male',
    },
  ];

  constructor() {}
}
