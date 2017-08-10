import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const userRoutes: Routes = [
    {path: 'user/:userId', component: UserDetailComponent, children:[
        { path: '', pathMatch: 'full', redirectTo: 'profile'},
        { path: 'profile', component: UserProfileComponent },
        { path: 'change-password', component: ChangePasswordComponent },
        { path: '**', redirectTo: "profile"},
    ]}
];

export const UsersRouting = RouterModule.forChild(userRoutes);
export const UserModuleComponents = [UserProfileComponent, ChangePasswordComponent, UserDetailComponent];