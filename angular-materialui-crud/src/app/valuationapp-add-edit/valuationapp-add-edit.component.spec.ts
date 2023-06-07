import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationappAddEditComponent } from './valuationapp-add-edit.component';

describe('ValuationappAddEditComponent', () => {
  let component: ValuationappAddEditComponent;
  let fixture: ComponentFixture<ValuationappAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuationappAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationappAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
