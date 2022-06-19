import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsComponent } from './rx-js-component.component';

describe('RxJsComponent', () => {
  let component: RxJsComponent;
  let fixture: ComponentFixture<RxJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
