import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SaleemService {
  constructor(private http: HttpClient) {}

  getUsersData() {
    return this.http.get(
      'https://crudcrud.com/api/6d950e61b0ac4c3ba20a4f886e5d550a/user'
    );
  }

  getById(id) {
    return this.http.get(
      'https://crudcrud.com/api/6d950e61b0ac4c3ba20a4f886e5d550a/user/' + id
    );
  }

  postForm(entity) {
    return this.http.post(
      'https://crudcrud.com/api/6d950e61b0ac4c3ba20a4f886e5d550a/user',
      entity
    );
  }

  putForm(entity, id) {
    return this.http.put(
      'https://crudcrud.com/api/6d950e61b0ac4c3ba20a4f886e5d550a/user/' + id,
      entity
    );
  }

  delete(id) {
    return this.http.delete(
      'https://crudcrud.com/api/6d950e61b0ac4c3ba20a4f886e5d550a/user/' + id
    );
  }

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
}
