import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationModalComponent } from './navigation-modal.component';

describe('NavigationModalComponent', () => {
  let component: NavigationModalComponent;
  let fixture: ComponentFixture<NavigationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
