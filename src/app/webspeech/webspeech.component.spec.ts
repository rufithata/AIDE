import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebspeechComponent } from './webspeech.component';

describe('WebspeechComponent', () => {
  let component: WebspeechComponent;
  let fixture: ComponentFixture<WebspeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebspeechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebspeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
