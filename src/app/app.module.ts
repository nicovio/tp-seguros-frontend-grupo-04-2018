import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { PolizasExistentesComponent } from './polizas-existentes/polizas-existentes.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrarSegurosPipe } from './pipes/filtrar-seguros.pipe';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatDividerModule, MAT_DATE_LOCALE } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RefrescarPantallaComponent } from './refrescar-pantalla/refrescar-pantalla.component';
import { ReporteComponent } from './reporte/reporte.component';
import { DialogoReporteComponent } from './reporte/dialogo-reporte/dialogo-reporte.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      PolizasExistentesComponent,
      FiltrarSegurosPipe,
      RefrescarPantallaComponent,
      ReporteComponent,
      DialogoReporteComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule,
      MatButtonModule,
      MatDividerModule,
      MatProgressSpinnerModule,
      MDBBootstrapModule.forRoot()
   ],
   entryComponents: [DialogoReporteComponent],
   providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
