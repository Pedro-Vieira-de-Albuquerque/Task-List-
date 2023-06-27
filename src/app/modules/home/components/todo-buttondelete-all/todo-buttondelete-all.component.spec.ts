import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtondeleteAllComponent } from './todo-buttondelete-all.component';

describe('TodoButtondeleteAllComponent', () => {
  let component: TodoButtondeleteAllComponent;
  let fixture: ComponentFixture<TodoButtondeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtondeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtondeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
