import { FacturasAdminComponent } from './pages/facturas/facturas-admin/facturas-admin.component';
import { FacturasComponent } from './pages/facturas/facturas/facturas.component';
import { GastosGlobalesComponent } from './pages/gastos-globales/gastos-globales/gastos-globales.component';
import { AuthGuard } from './auth.service';
import { ViajesComponent } from './pages/viajes/viajes/viajes.component';
import { HomeComponent } from './pages/core/home/home.component';
import { DashboardComponent } from './pages/core/dashboard/dashboard.component';
import { LoginComponent } from './pages/core/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, outlet: 'inner', canActivate: [AuthGuard]},
    {path: 'viajes', component: ViajesComponent, outlet: 'inner', canActivate: [AuthGuard]},
    {path: 'gastos-globales', component: GastosGlobalesComponent, outlet: 'inner', canActivate: [AuthGuard]},
    {path: 'facturas', component: FacturasComponent, outlet: 'inner', canActivate: [AuthGuard]},
    {path: 'facturas-admin', component: FacturasAdminComponent, outlet: 'inner', canActivate: [AuthGuard]},
  ]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
