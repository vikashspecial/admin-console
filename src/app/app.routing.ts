import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'admin'},
    { path: '**', redirectTo: "admin"}
];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes),
        UserModule,
        AdminModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const appRoutingComponents = [];
