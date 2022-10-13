import { Component, OnInit } from '@angular/core';
import { SaleemService } from '../saleem.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  employs = employArray;

  ngOnInit() {}
}

const employArray = [
  { name: 'a', email: 'a@gmail.com', no: 1 },
  { name: 's', email: '', no: 2 },
  { name: 'd', email: 'd@gmail.com', no: 3 },
  { name: 'f', email: 'f@gmail.com', no: 4 },
  { name: 'g', email: '', no: 5 },
  { name: 'h', email: 'h@gmail.com', no: 6 },
  { name: 'j', email: 'j@gmail.com', no: 7 },
  { name: 'k', email: 'k@gmail.com', no: 8 },
  { name: 'l', email: '', no: 9 },
  { name: 'p', email: 'p@gmail.com', no: 10 },
];
