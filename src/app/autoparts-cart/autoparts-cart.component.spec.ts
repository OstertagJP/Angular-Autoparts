import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopartsCartComponent } from './autoparts-cart.component';

describe('AutopartsCartComponent', () => {
  let component: AutopartsCartComponent;
  let fixture: ComponentFixture<AutopartsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutopartsCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutopartsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
