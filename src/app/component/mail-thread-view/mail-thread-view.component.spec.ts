import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MailThreadViewComponent} from './mail-thread-view.component';

describe('MailThreadViewComponent', () => {
  let component: MailThreadViewComponent;
  let fixture: ComponentFixture<MailThreadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MailThreadViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailThreadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
