import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Storage } from '../storage/storage';
import { Search } from '../search/search';
import { StorageOveriew } from '../storage-overiew/storage-overiew';

@Component({
  selector: 'app-main',
  imports: [MatTooltipModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  readonly dialog = inject(MatDialog);

  openStoreDialog() {
    const dialogRef = this.dialog.open(Storage);

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openSearchDialog() {
    const dialogRef = this.dialog.open(Search);

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openStoreOverviewDialog() {
    const dialogRef = this.dialog.open(StorageOveriew);

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
