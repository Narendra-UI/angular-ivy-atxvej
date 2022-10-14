import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { SaleemService } from '../saleem.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serviceRef: SaleemService
  ) {}

  emp: any = {};
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      console.log(params['id']);
      this.emp = this.serviceRef.result.find(
        (element) => element.id == params['id']
      );
    });
  }
}
