import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersionDialogComponent } from './version-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';


describe('VersionDialogComponent', () => {
  let component: VersionDialogComponent;
  let fixture: ComponentFixture<VersionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionDialogComponent],
      providers:[ 
         { provide: MatDialogRef, useValue: {} }
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
