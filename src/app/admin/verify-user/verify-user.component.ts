import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {
  @Input() userId: number;
  @Input() isVerified: boolean;
  @Output() onVerifyUser = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  verifyUser(userId) {
    this.onVerifyUser.emit(userId);
    this.isVerified = true;
  }
  goToUserDetail(userId): void {
    this.router.navigate(['/user/', userId, 'profile']);
  }
}
