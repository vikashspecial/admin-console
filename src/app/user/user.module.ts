import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRouting, UserModuleComponents } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    UsersRouting
  ],
  declarations: [UserModuleComponents]
})
export class UserModule { }
