import { NgModule }     from '@angular/core';
import {
  RouterModule, Routes, PreloadAllModules,
} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CurrentUser } from './models/current-user';
import { AuthGuard } from './auth-guard.service';



const appRoutes: Routes = [
  {
    path: 'Admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'Parent',
    loadChildren: './guardians/guardians.module#GuardiansModule',
    canActivate:[AuthGuard]
  },
  { path: '',   redirectTo: '/Admin', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,  { useHash:true,
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CurrentUser, 
    AuthGuard,
 // CanDeactivateGuard
  ]
})
export class AppRoutingModule {}