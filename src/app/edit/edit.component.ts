import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { SaleemService } from '../saleem.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  editFormvalid: boolean = true;
  emp: any = {};
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private serviceRef: SaleemService,
    private routeRef: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    ///id extract
    // service inject
    //result.find
    //this.editForm = this.emp.name
    this.routeRef.params.subscribe((params) => {
      console.log(params);
      console.log(params['id']);
      this.id = params['id'];
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
  editFormSubmit() {
    this.serviceRef.result = this.serviceRef.result.map((data) => {
      if (data.id == this.id) {
        data.id = this.id;
        data.name = this.editForm.get('name').value;
        data.contact = this.editForm.get('contact').value;
        data.email = this.editForm.get('email').value;
        data.gender = this.editForm.get('gender').value;
      }
      return data;
    });
    this.router.navigate(['/profile']);
  }
}
