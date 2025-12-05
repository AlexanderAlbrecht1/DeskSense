import { Component, signal, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule , FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-storage',
  imports: [MatDialogModule,FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './storage.html',
  styleUrl: './storage.scss',
})
export class Storage implements OnInit {
  readonly item = new FormControl('', Validators.required);
  readonly storage = new FormControl('', Validators.required);

  errorMessage = signal('');
  errorMessageStorage = signal('');

  constructor(public dataService : DataService) {
    merge(this.item.statusChanges, this.item.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageItem());

    merge(this.storage.statusChanges, this.storage.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageStorage());
  }

  ngOnInit(): void {

  }

  updateErrorMessageItem() {
    if (this.item.hasError('required')) {
      this.errorMessage.set('Du musst einen Gegenstand eingeben');
    } else {
      this.errorMessage.set('');
    }
  }

  updateErrorMessageStorage() {
    if (this.storage.hasError('required')) {
      this.errorMessageStorage.set('Du musst einen Ort auswählen');
    } else {
      this.errorMessageStorage.set('');
    }
  }

  addItemtoStorage() {
    this.dataService.adNewItemtoStorage();
  }
}
