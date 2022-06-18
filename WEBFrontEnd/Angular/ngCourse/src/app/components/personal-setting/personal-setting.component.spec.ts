import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSettingComponent } from './personal-setting.component';

describe('PersonalSettingComponent', () => {
  let component: PersonalSettingComponent;
  let fixture: ComponentFixture<PersonalSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
