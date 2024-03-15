import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChefsComponent } from './list-chefs.component';

describe('ListChefsComponent', () => {
  let component: ListChefsComponent;
  let fixture: ComponentFixture<ListChefsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChefsComponent]
    });
    fixture = TestBed.createComponent(ListChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
