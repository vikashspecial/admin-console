import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form;
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
      age: new FormControl(""),
      email: new FormControl(""),
      mobile: new FormControl("")
    });
  }

  addUser(user) {
    this.userService.addUser(user);
    this.router.navigate(['user-list']);
  }
}
