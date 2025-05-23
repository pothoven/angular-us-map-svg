import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDialogComponent } from './state-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('StateDialogComponent', () => {
  let component: StateDialogComponent;
  let fixture: ComponentFixture<StateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: jasmine.createSpyObj(['close', 'afterClosed']) },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
