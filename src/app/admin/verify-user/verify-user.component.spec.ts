import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VerifyUserComponent } from './verify-user.component';

describe('VerifyUserComponent', () => {
  let component: VerifyUserComponent;
  let fixture: ComponentFixture<VerifyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyUserComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('for given userId verified user should be true', () => {
    let initialValue = component.isVerified;
    component.verifyUser(1);
    fixture.detectChanges();
    let newValue = component.isVerified;
    expect(newValue).toBeTruthy();
  });
});
