import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopartsGeneralComponent } from './autoparts-general.component';

describe('AutopartsGeneralComponent', () => {
  let component: AutopartsGeneralComponent;
  let fixture: ComponentFixture<AutopartsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutopartsGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutopartsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
