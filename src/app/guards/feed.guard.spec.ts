import { TestBed } from '@angular/core/testing';

import { FeedGuard } from './feed.guard';

describe('FeedGuard', () => {
  let guard: FeedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FeedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
