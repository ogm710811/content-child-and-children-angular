import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRememberComponent } from './auth-remember.component';

describe('AuthRememberComponent', () => {
  let component: AuthRememberComponent;
  let fixture: ComponentFixture<AuthRememberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRememberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
