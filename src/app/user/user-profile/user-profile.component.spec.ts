import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile.component';
import { UsersService } from '../../services/users.service';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ UserProfileComponent],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    component.userData = {
        id: 1,
        name: "vikash",
        age: 18,
        email: "test@gmail.com",
        mobile: 534534,
        isVerified: true
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

  