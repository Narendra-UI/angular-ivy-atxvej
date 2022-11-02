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

  match(){
  const ref=["xyzxzrt"];
  var a = this.ref.split("");
  for(var i=0; i<a.length; i++){
    for(var s=i+1; s<a.length-1; s++){
      if(a[i]==s[a]){
        count=count+1;
      }
    }
  }
}

  constructor() {}
}
