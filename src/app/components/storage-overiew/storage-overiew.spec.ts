import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageOveriew } from './storage-overiew';

describe('StorageOveriew', () => {
  let component: StorageOveriew;
  let fixture: ComponentFixture<StorageOveriew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageOveriew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageOveriew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
