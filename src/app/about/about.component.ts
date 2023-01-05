import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleemService } from '../saleem.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  myForm: FormGroup;
  UserService: any;

  usersData: any = [];
  activatedID: any = 0;
  showLoader: boolean = false;

  constructor(
    private fb: FormBuilder,
    private user: SaleemService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
    });
    this.getUsersData();
  }

  onSubmit(form: FormGroup) {
    this.showLoader = true;
    this.user.postForm(form.value).subscribe((data) => {
      this.getUsersData();
    });
  }

  // submit(){
  //   this.showLoader = true;
  //   this.user.postData().subc(data=>{
  //     if(){
  //       this.showLoader = false;
  //     }
  //   })
  // }

  myClickFunction(event) {
    console.log(event);
  }
  myUpdateFunction(event) {
    this.showLoader = true;
    this.user.putForm(event.value, this.activatedID).subscribe((data) => {
      this.getUsersData();
    });
  }
  getbyid(id) {
    this.activatedID = id;
    this.user.getById(id).subscribe((data) => {
      this.myForm.patchValue({
        name: data['name'],
        age: data['age'],
        gender: data['gender'],
      });
    });
  }

  getbyidview(id) {
    this.router.navigate(['/view', id]);
    // this.user.getById(id).subscribe((data) => {});
  }

  delete(id) {
    this.user.delete(id).subscribe((data) => {
      this.getUsersData();
    });
  }
  getUsersData() {
    this.user.getUsersData().subscribe((data) => {
      this.usersData = data;
      this.showLoader = false;
    });
  }
}
