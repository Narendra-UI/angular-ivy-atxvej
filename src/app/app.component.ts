import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SaleemService } from './saleem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLoader: boolean = false;
  name = 'Angular ' + VERSION.major;

  myForm: FormGroup;
  SaleemService: any;

  usersData: any = [];
  activatedID: any = 0;
  constructor(
    private fb: FormBuilder,
    private user: SaleemService,
    private router: Router
  ) {}

  // submit(){
  //   this.showLoader = true;
  //   this.user.postData().subc(data=>{
  //     if(){
  //       this.showLoader = false;
  //     }
  //   })
  // }
}
