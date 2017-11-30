import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership/membership.component';
import { CreateUserComponent } from './membership/create-user/create-user.component';
import { UserListComponent } from './membership/user-list/user-list.component';
import { EditUserComponent } from './membership/edit-user/edit-user.component';
import { RegisterComponent } from './membership/register/register.component';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ],
  declarations: [
    MembershipComponent,
    CreateUserComponent,
    UserListComponent,
    EditUserComponent,
    SignInComponent,
    RegisterComponent]
})
export class AdminModule { }
