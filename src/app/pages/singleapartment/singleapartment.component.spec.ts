import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleapartmentComponent } from './singleapartment.component';

describe('SingleapartmentComponent', () => {
  let component: SingleapartmentComponent;
  let fixture: ComponentFixture<SingleapartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleapartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleapartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
