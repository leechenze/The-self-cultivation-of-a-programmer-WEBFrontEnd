import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCenterComponentComponent } from './personal-center-component.component';

describe('PersonalCenterComponentComponent', () => {
  let component: PersonalCenterComponentComponent;
  let fixture: ComponentFixture<PersonalCenterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCenterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCenterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
