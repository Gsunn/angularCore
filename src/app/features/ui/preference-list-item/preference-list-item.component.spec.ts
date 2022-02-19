import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceListItemComponent } from './preference-list-item.component';

describe('MenuListItemComponent', () => {
  let component: PreferenceListItemComponent;
  let fixture: ComponentFixture<PreferenceListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferenceListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
