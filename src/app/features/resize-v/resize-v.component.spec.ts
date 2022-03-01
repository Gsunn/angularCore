import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeVComponent } from './resize-v.component';

describe('ResizeVComponent', () => {
  let component: ResizeVComponent;
  let fixture: ComponentFixture<ResizeVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
