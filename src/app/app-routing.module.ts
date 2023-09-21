import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const USER_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  }
]

const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  }
]

const routes: Routes = [
  {
    path: "admin", component: AdminLayoutComponent,
    children: ADMIN_ROUTES,
    //canActivate: [AuthenticationGuard, SubcontractorGuard]
  },
  {
    path: "", component: UserLayoutComponent,
    children: USER_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
