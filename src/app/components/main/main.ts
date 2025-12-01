import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-main',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
