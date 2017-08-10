import {RouterModule, Routes} from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';  
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';

const adminRouts: Routes = [
    { path: 'admin', component: DashboardComponent, children: [
            { path: '', pathMatch: 'full', redirectTo:'user-list'},
            { path: 'user-list', component: UserListComponent },
            { path: 'add-user', component: AddUserComponent }
        ]
    }
];

export const AdminRouting = RouterModule.forChild(adminRouts);
export const AdminComponents = [UserListComponent, VerifyUserComponent, DashboardComponent, AddUserComponent];