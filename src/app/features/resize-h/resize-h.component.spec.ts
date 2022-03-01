import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeHComponent } from './resize-h.component';

describe('ResizeComponent', () => {
  let component: ResizeHComponent;
  let fixture: ComponentFixture<ResizeHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
