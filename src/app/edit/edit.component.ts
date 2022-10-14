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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  editFormvalid: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private serviceRef: SaleemService,
    private routeRef: Router
  ) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      aadhaar: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
  }
  profileFormSubmit() {
    console.log(this.editForm.value);
    this.serviceRef.result.push(this.editForm.value);
    this.routeRef.navigate(['/profile']);
  }
}
