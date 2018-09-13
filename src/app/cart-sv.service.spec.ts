import { TestBed, inject } from '@angular/core/testing';

import { CartSvService } from './cart-sv.service';

describe('CartSvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartSvService]
    });
  });

  it('should be created', inject([CartSvService], (service: CartSvService) => {
    expect(service).toBeTruthy();
  }));
});
