import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  onChange() {
    console.log('Schlater betätigt');

  }

}
