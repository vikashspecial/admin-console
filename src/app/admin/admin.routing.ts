import {RouterModule, Routes} from '@angular/router';

import {UserListComponent} from './user-list/user-list.component';  
import { VerifyUserComponent } from './verify-user/verify-user.component';

const adminRouts: Routes = [
    { path: 'admin', component: UserListComponent}
];

export const AdminRouting = RouterModule.forChild(adminRouts);
export const AdminComponents = [UserListComponent, VerifyUserComponent];