import { UploadService } from './upload.service';
import { AuthGuard } from './auth.service';
import { MaterialModule } from './app.material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from "@agm/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { LoginComponent } from './pages/core/login/login.component';
import { DashboardComponent } from './pages/core/dashboard/dashboard.component';
import { HomeComponent } from './pages/core/home/home.component';
import { ViajesComponent } from './pages/viajes/viajes/viajes.component';
import { ViajesAddComponent } from './pages/viajes/viajes-add/viajes-add.component';
import { ViajesEditComponent } from './pages/viajes/viajes-edit/viajes-edit.component';
import { ViajesDeleteComponent } from './pages/viajes/viajes-delete/viajes-delete.component';
import { ViajesDetailComponent } from './pages/viajes/viajes-detail/viajes-detail.component';
import { ViajesGastosComponent } from './pages/viajes/viajes-gastos/viajes-gastos.component';
import { GastosAdddComponent } from './pages/viajes/gastos-addd/gastos-addd.component';
import { GastosEditComponent } from './pages/viajes/gastos-edit/gastos-edit.component';
import { GastosGlobalesComponent } from './pages/gastos-globales/gastos-globales/gastos-globales.component';
import { GastosGlobalesAddComponent } from './pages/gastos-globales/gastos-globales-add/gastos-globales-add.component';
import { GastosGlobalesEditComponent } from './pages/gastos-globales/gastos-globales-edit/gastos-globales-edit.component';
import { GastosGlobalesDeleteComponent } from './pages/gastos-globales/gastos-globales-delete/gastos-globales-delete.component';
import { GastosGlobalesDetailComponent } from './pages/gastos-globales/gastos-globales-detail/gastos-globales-detail.component';
import { FacturasComponent } from './pages/facturas/facturas/facturas.component';
import { FacturasAddComponent } from './pages/facturas/facturas-add/facturas-add.component';
import { FacturasEditComponent } from './pages/facturas/facturas-edit/facturas-edit.component';
import { FacturasDeleteComponent } from './pages/facturas/facturas-delete/facturas-delete.component';
import { FacturasDetailComponent } from './pages/facturas/facturas-detail/facturas-detail.component';
import { FacturasAdminComponent } from './pages/facturas/facturas-admin/facturas-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ViajesComponent,
    ViajesAddComponent,
    ViajesEditComponent,
    ViajesDeleteComponent,
    ViajesDetailComponent,
    ViajesGastosComponent,
    GastosAdddComponent,
    GastosEditComponent,
    GastosGlobalesComponent,
    GastosGlobalesAddComponent,
    GastosGlobalesEditComponent,
    GastosGlobalesDeleteComponent,
    GastosGlobalesDetailComponent,
    FacturasComponent,
    FacturasAddComponent,
    FacturasEditComponent,
    FacturasDeleteComponent,
    FacturasDetailComponent,
    FacturasAdminComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    NgxDatatableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCqgEpBnskwBzZY1_-LCqgYGbajwy7q1Wg",
      libraries: ["places"]
    }),
  ],
  entryComponents: [
    ViajesAddComponent,
    ViajesEditComponent,
    ViajesDeleteComponent,
    ViajesDetailComponent,
    ViajesGastosComponent,
    GastosAdddComponent,
    GastosEditComponent,
    GastosGlobalesAddComponent,
    GastosGlobalesEditComponent,
    GastosGlobalesDeleteComponent,
    GastosGlobalesDetailComponent,
    FacturasAddComponent,
    FacturasEditComponent,
    FacturasDeleteComponent,
    FacturasDetailComponent
  ],
  providers: [AuthGuard, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
