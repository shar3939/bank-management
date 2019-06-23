import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexManagementComponent } from './forex-management.component';

describe('ForexManagementComponent', () => {
  let component: ForexManagementComponent;
  let fixture: ComponentFixture<ForexManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
