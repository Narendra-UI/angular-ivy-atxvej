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
  displayStyle = 'none';
  id: any;

  openPopup(id) {
    this.displayStyle = 'block';
    console.log(id);
    this.id = id;
  }
  closePopup() {
    var val = this.id;
    // var filteredObj = this.data.find(function (item, i) {
    //   if (item.id === val) {
    //     return i + 1;
    //   }
    // });

    var obj = this.data.findIndex((d) => d.id == val);

    this.data.splice(obj, 1);
    console.log(this.id);
    this.displayStyle = 'none';
    // index
  }
}
