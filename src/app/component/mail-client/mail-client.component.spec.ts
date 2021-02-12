import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MailClientComponent} from './mail-client.component';

describe('MailClientComponent', () => {
  let component: MailClientComponent;
  let fixture: ComponentFixture<MailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MailClientComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
