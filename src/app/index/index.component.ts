import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  color = 'red';
  widget: boolean = true;

  obj = {
    a: '12',
    b: '34',
    c: '56'
  }
  constructor() { }

  ngOnInit(): void {
  }

}


