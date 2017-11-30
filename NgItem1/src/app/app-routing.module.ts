import { NgModule }     from '@angular/core';
import {
  RouterModule, Routes, PreloadAllModules,
} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const appRoutes: Routes = [
  {
    path: 'Admin',
    loadChildren: './admin/admin.module#AdminModule',
  // canLoad: [AuthGuard]
  },
  {
    path: 'Parent',
    loadChildren: './guardians/guardians.module#GuardiansModule',
   // canLoad: [AuthGuard]
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
 // CanDeactivateGuard
  ]
})
export class AppRoutingModule {}