import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedIconsComponent } from './shared-icons.component';

describe('SharedIconsComponent', () => {
  let component: SharedIconsComponent;
  let fixture: ComponentFixture<SharedIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
