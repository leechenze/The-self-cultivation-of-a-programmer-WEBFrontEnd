import { TestBed } from '@angular/core/testing';

import { GoodsListService } from './goods-list-component.service';

describe('GoodsListService', () => {
  let service: GoodsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
