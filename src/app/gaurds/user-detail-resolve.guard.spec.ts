import { TestBed } from '@angular/core/testing';

import { UserDetailResolveGuard } from './user-detail-resolve.guard';

describe('UserDetailResolveGuard', () => {
  let guard: UserDetailResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserDetailResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
