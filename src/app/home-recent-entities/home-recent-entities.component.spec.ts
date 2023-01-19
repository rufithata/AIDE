import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecentEntitiesComponent } from './home-recent-entities.component';

describe('HomeRecentEntitiesComponent', () => {
  let component: HomeRecentEntitiesComponent;
  let fixture: ComponentFixture<HomeRecentEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRecentEntitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecentEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
