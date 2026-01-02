import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormsModule, ReactiveFormsModule, Validators, FormBuilder, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
  ],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration {
  private router = inject(Router);

    email = new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    });
  readonly password = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(8)],
  });
  readonly repeatedPassword = new FormControl('', [Validators.required]);

  errorMessage = signal('');
  hide = signal(true);

  constructor( private dataService : DataService, private fb: FormBuilder) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }



  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  register(email: string, password: string) {
    this.dataService.register(email, password);
    // this.email.value = '';
    this.router.navigate(['/login']);
  }
}
