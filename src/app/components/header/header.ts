import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RouterLink } from "@angular/router";
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, RouterLink, MatTooltipModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  onChange() {
    console.log('Schlater betätigt');

  }

}
