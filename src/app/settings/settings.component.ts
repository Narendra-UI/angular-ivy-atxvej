import { Component, OnInit } from '@angular/core';
import { SaleemService } from '../saleem.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor(private serviceRef: SaleemService) {}

  ngOnInit() {
    console.log(this.serviceRef.add(1, 2));
    console.log(this.serviceRef.sub(11, 10));
  }
  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
