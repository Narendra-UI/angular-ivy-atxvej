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
  emp: any = {};
  route: any;

  constructor(
    private formBuilder: FormBuilder,
    private serviceRef: SaleemService,
    private routeRef: Router
  ) {}

  ngOnInit() {
    ///id extract
    // service inject
    //result.find

    //this.editForm = this.emp.name

    this.route.params.subscribe((params) => {
      console.log(params);
      console.log(params['id']);
      this.serviceRef.result.map((element) => {
        if (element.id == params['id']) {
          this.editForm = this.formBuilder.group({
            name: new FormControl(element.name, Validators.required),
            contact: new FormControl(element.contact, Validators.required),
            email: new FormControl(element.email, Validators.required),
            gender: new FormControl(element.gender, Validators.required),
          });
        }
      });
    });
  }
  // profileFormSubmit() {
  //   console.log(this.editForm.value);
  //   this.serviceRef.result.push(this.editForm.value);
  //   this.routeRef.navigate(['/profile']);
  // }
}
