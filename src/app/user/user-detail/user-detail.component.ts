import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Location } from '@angular/common';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.userService.setSelectedUser(params.get('userId'));
    });
  }
  goBack() {
    this.router.navigate(['/admin']);
  }
}
