import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersList: Users[];
  notificationMessage: string;
  isResetRequired: boolean = false;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersList = this.usersService.getUsersList();
    this.isResetRequired = this.checkAnyUserVerified();
  }

  checkAnyUserVerified (): boolean {
    for(let i=0, j=this.usersList.length; i<j; i++) {
      let userInfo = this.usersList[i];
      if(userInfo.isVerified) {
        return true;
      }
    }
    return false;
  }
  userVerified(userId) {
    this.usersService.updateUserInfo(userId);
    this.isResetRequired = this.checkAnyUserVerified();
    this.showMessage("User " + userId + " verified Successfully!", 2000);
  }

  resetUsers() {
    this.usersService.resetUserInfo();
    this.isResetRequired = false;
    this.showMessage("All users reset successfully !");
  }

  showMessage (message, timeout: number = 3000){
    this.notificationMessage = message;
    setTimeout(()=>this.notificationMessage="", timeout);
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