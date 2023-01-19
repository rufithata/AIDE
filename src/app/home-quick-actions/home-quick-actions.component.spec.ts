import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuickActionsComponent } from './home-quick-actions.component';

describe('HomeQuickActionsComponent', () => {
  let component: HomeQuickActionsComponent;
  let fixture: ComponentFixture<HomeQuickActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeQuickActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeQuickActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
