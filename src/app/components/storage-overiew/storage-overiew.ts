import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-storage-overiew',
  imports: [],
  templateUrl: './storage-overiew.html',
  styleUrl: './storage-overiew.scss',
})
export class StorageOveriew implements OnInit {

  constructor(public dataService : DataService ) {  }

  ngOnInit(): void {
    this.showItemOverview();
  }

  showStorageOverview() {
    this.dataService.getSingleItem('3N1DG8bFux0mbyerH4q1');
  }

  showItemOverview() {
    this.dataService.getItemOverview();
  }

}
