import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MembershipComponent } from "./membership/membership.component";
import { UserListComponent } from "./membership/user-list/user-list.component";
import { EditUserComponent } from "./membership/edit-user/edit-user.component";
import { CreateUserComponent } from "./membership/create-user/create-user.component";
import { AuthGuard } from "../auth-guard.service";


const adminRoutes: Routes = [
  {
    path: '',
    component: MembershipComponent,
    canActivateChild:[AuthGuard],
    children: [
      {
        path: 'UserList',
        component: UserListComponent,
      },
      {
        path: 'Edit/:id',
        component: EditUserComponent,
      },
      {
        path: 'Create',
        component: CreateUserComponent,
        // canDeactivate: [CanDeactivateGuard],
        resolve: {
          //  crisis: CrisisDetailResolver
        },
      },
    ]
  },
 
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})

export class AdminRoutingModule {
}
