import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationComponentComponent } from './communication-component.component';

describe('CommunicationComponentComponent', () => {
  let component: CommunicationComponentComponent;
  let fixture: ComponentFixture<CommunicationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
