import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ThemeService } from '../service/theme.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
  color = '#002300';
  showSketch = false;
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  handleChange(event: ColorEvent) {
    console.log(event);
    this.color = event.color.hex;
  }

  handleFocus() {
    this.color = '';
    this.showSketch = true;
  }

  handleSubmit() {
    this.showSketch = false;
    this.themeService.saveColor(this.color);
  }
}
