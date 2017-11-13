import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemModalComponent } from './list-item-modal.component';

describe('ListItemModalComponent', () => {
  let component: ListItemModalComponent;
  let fixture: ComponentFixture<ListItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
