import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AdminRouting, AdminComponents } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    NgbModule.forRoot()
  ],
  declarations: [AdminComponents]
})
export class AdminModule { }
