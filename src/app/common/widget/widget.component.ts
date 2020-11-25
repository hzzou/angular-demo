import { Component, OnInit } from '@angular/core';
import {Debounce} from '../util/decorators';
import { HttpService } from '../service/http.service';
import { saveAs } from 'file-saver';
import { TableExport } from 'tableexport';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})


export class WidgetComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  @Debounce(1000)
  handleClick() {
    console.log(111);
    this.httpService.getConfig().subscribe((res) => {
      console.log(res);
    });

    const table = document.querySelector('#table');
    new TableExport(table,{
      formats: ['.doc']
    });
  }
}
