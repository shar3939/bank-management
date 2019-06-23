import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankWelcomeComponent } from './bank-welcome.component';

describe('BankWelcomeComponent', () => {
  let component: BankWelcomeComponent;
  let fixture: ComponentFixture<BankWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
