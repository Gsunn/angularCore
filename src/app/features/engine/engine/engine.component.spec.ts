import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mesh3dComponent } from './engine.component';

describe('Mesh3dComponent', () => {
  let component: Mesh3dComponent;
  let fixture: ComponentFixture<Mesh3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mesh3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mesh3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
