import {TestBed} from '@angular/core/testing';

import {MailThreadService} from './mail-thread.service';

describe('MailThreadService', () => {
  let service: MailThreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailThreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
