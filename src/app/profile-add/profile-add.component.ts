import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { SaleemService } from '../saleem.service';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.css'],
})
export class ProfileAddComponent implements OnInit {
  profileForm: FormGroup;
  profileFormvalid: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private serviceRef: SaleemService,
    private routeRef: Router
  ) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      aadhaar: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
  }
  profileFormSubmit() {
    console.log(this.profileForm.value);
    this.serviceRef.result.push(this.profileForm.value);
    this.routeRef.navigate(['/profile']);
  }
}
