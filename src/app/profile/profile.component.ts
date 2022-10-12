import { Component, OnInit } from '@angular/core';
import { SaleemService } from '../saleem.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private serviceRef: SaleemService) {}
  data = this.serviceRef.result;
  ngOnInit() {}
}
