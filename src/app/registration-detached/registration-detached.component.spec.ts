import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDetachedComponent } from './registration-detached.component';

describe('RegistrationDetachedComponent', () => {
  let component: RegistrationDetachedComponent;
  let fixture: ComponentFixture<RegistrationDetachedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDetachedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationDetachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
