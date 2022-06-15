import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsListComponentComponent } from './goods-list-component.component';

describe('GoodsListComponentComponent', () => {
  let component: GoodsListComponentComponent;
  let fixture: ComponentFixture<GoodsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
