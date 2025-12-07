import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { DataService } from '../../data.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-search',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit {
  itemsInStorage = [];
  displayedColumns: string[] = ['item', 'storageLocation', 'storageDetail'];
  clickedItem = {};

  readonly searchInput = new FormControl('', Validators.required);
  errorMessage = signal('');

  constructor(public dataService: DataService, private cdr: ChangeDetectorRef) {
    merge(this.searchInput.statusChanges, this.searchInput.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageSearchInput());
  }

  async ngOnInit(): Promise<void> {
    this.itemsInStorage = await this.showItemOverview();
    this.cdr.markForCheck();
    console.log(this.itemsInStorage);

  }

  showItemOverview() {
    return this.dataService.getItemOverview();
  }

  updateErrorMessageSearchInput() {
    if (this.searchInput.hasError('required')) {
      this.errorMessage.set('Du musst einen Gegenstand eingeben');
    } else {
      this.errorMessage.set('');
    }
  }

  onItemClick(row:any) {
    this.clickedItem = row;
    console.log(this.clickedItem);

  }

  async takeItem(row:any) {
    console.log(row.id);
    this.dataService.deleteItem(row.id);
    this.itemsInStorage = await this.showItemOverview();
    this.cdr.markForCheck();
  }
}
