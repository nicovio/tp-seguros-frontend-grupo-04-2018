import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolizasExistentesComponent } from './polizas-existentes/polizas-existentes.component';
import { RefrescarPantallaComponent } from './refrescar-pantalla/refrescar-pantalla.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  { path: '', redirectTo: 'polizas-existentes', pathMatch: 'full' },

  { path: 'polizas-existentes', component: PolizasExistentesComponent },
  { path: 'refrescar-pantalla', component: RefrescarPantallaComponent },
  { path: 'reporte', component: ReporteComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
