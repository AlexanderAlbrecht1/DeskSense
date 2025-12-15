import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Storage } from '../storage/storage';
import { Search } from '../search/search';
import { StorageOveriew } from '../storage-overiew/storage-overiew';
import { UserService } from '../../user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [MatTooltipModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  private router = inject(Router);
  readonly dialog = inject(MatDialog);

  constructor(private userService : UserService) {}

  ngOnInit(): void {
    if (!this.userService.isUserLogged)
      this.router.navigate(['login'])
  }

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
