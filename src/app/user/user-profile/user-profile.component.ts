import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData: Users;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userData = this.userService.getUserDetail(this.userService.getSelectedUser());
  }
}

interface Users {
  id: number;
  name: string;
  age: number;
  email: string;
  mobile: number;
  isVerified: boolean;
}

