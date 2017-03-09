import {TestBed, inject} from '@angular/core/testing';

import {CustomRequestOptions} from './custom-request-options';

describe('CustomRequestOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomRequestOptions]
    });
  });

  it('should ...', inject([CustomRequestOptions], (service: CustomRequestOptions) => {
    expect(service).toBeTruthy();
  }));
});
