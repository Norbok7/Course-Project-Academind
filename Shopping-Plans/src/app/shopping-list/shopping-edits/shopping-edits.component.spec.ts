import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditsComponent } from './shopping-edits.component';

describe('ShoppingEditsComponent', () => {
  let component: ShoppingEditsComponent;
  let fixture: ComponentFixture<ShoppingEditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingEditsComponent]
    });
    fixture = TestBed.createComponent(ShoppingEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
