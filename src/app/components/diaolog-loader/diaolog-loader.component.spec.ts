import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaologLoaderComponent } from './diaolog-loader.component';

describe('DiaologLoaderComponent', () => {
  let component: DiaologLoaderComponent;
  let fixture: ComponentFixture<DiaologLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaologLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaologLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
