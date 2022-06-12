import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomComponentComponent } from './dom-component.component';

describe('DomComponentComponent', () => {
  let component: DomComponentComponent;
  let fixture: ComponentFixture<DomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
