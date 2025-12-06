import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../data.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-storage-overiew',
  imports: [MatCardModule, MatButtonModule, MatTableModule, MatProgressSpinnerModule],
  templateUrl: './storage-overiew.html',
  styleUrl: './storage-overiew.scss',
})
export class StorageOveriew implements OnInit {

  itemsInStorage = [];
  displayedColumns: string[] = ['item', 'storageLocation', 'storageDetail'];

  constructor(public dataService : DataService, private cdr: ChangeDetectorRef ) {  }

  async ngOnInit(): Promise<void> {
    this.itemsInStorage = await this.showItemOverview();
    this.cdr.markForCheck();
  }

  showStorageOverview() {
    this.dataService.getSingleItem('3N1DG8bFux0mbyerH4q1');
  }

  showItemOverview() {
   return this.dataService.getItemOverview();
  }

}


