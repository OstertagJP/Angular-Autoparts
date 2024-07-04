import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopartsAboutComponent } from './autoparts-about.component';

describe('AutopartsAboutComponent', () => {
  let component: AutopartsAboutComponent;
  let fixture: ComponentFixture<AutopartsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutopartsAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutopartsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
