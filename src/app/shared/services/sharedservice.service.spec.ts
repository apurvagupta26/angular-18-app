import { TestBed } from '@angular/core/testing';

import { SharedserviceService } from './sharedservice.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('SharedserviceService', () => {
  let service: SharedserviceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()  // Automatically provides HttpClient and HttpHandler for testing
      ]
    });
    service = TestBed.inject(SharedserviceService);
    httpTestingController = TestBed.inject(HttpTestingController);  // Inject HttpTestingController for testing requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
