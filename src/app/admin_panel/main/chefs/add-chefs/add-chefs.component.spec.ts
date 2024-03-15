import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChefsComponent } from './add-chefs.component';

describe('AddChefsComponent', () => {
  let component: AddChefsComponent;
  let fixture: ComponentFixture<AddChefsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChefsComponent]
    });
    fixture = TestBed.createComponent(AddChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
