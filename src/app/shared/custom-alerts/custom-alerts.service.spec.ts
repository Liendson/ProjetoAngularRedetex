import { TestBed } from '@angular/core/testing';

import { CustomAlertsService } from './custom-alerts.service';

describe('CustomAlertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomAlertsService = TestBed.get(CustomAlertsService);
    expect(service).toBeTruthy();
  });
});
