import { AdminDashboardComponent } from './../Components/Admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from '../Components/user/dashboard/dashboard.component';
import { LoginComponent } from './../Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'UserDashBoard', component: DashboardComponent },
  {path:'AdminDashboard',component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}