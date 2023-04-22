import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilFieldComponent } from './mobil-field.component';

describe('MobilFieldComponent', () => {
  let component: MobilFieldComponent;
  let fixture: ComponentFixture<MobilFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
