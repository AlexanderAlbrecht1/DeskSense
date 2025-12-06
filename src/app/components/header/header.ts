import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  onChange() {
    console.log('Schlater betätigt');

  }

}
