import { Injectable } from '@angular/core';
@Injectable()
export class UsersService {
  selectedUser = 0;

  usersList = JSON.parse(localStorage.getItem('userList')) || [
    {
    id: 1,
    name: 'Vikash Yadav',
    age: 25,
    email: 'vikashspecial1@gmail.com',
    mobile: 9565838330
    },
    {
      id: 2,
      name: 'Harry Potter',
      age: 23,
      email: 'harry@gmail.com',
      mobile: 452344523435
    },
    {
      id: 3,
      name: 'Ronald Wisely',
      age: 25,
      email: 'ronald@gmail.com',
      mobile: 3423423
    }
  ];

  constructor() {

  }
  getUsersList() {
    return this.usersList;
  }

  updateUserInfo(userId: number) {
    for(let i=0,j=this.usersList.length; i<j; i++) {
      if((i+1) ==  userId) {
        this.usersList[i].isVerified = true;
        break;
      }
    }
    localStorage.setItem("userList", JSON.stringify(this.usersList));
  }
  resetUserInfo() {
    for(let i=0,j=this.usersList.length; i<j; i++) {
        this.usersList[i].isVerified = false;
      }
    localStorage.setItem("userList", JSON.stringify(this.usersList));
  }

  getUserDetail (userId) {
    for(let i=0,j=this.usersList.length; i<j; i++) {
      if((i+1) ==  userId) {
        return this.usersList[i]
      }
    }
    return this.usersList[this.selectedUser];
  }

  setSelectedUser(userId) {
    this.selectedUser = userId;
  }

  getSelectedUser() {
    return this.selectedUser;
  }
}
