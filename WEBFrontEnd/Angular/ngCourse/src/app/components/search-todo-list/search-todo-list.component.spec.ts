import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTodoListComponent } from './search-todo-list.component';

describe('SearchTodoListComponent', () => {
  let component: SearchTodoListComponent;
  let fixture: ComponentFixture<SearchTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
