import { Injectable } from '@angular/core';
import ParametrosReporte from '../domain/ParametrosReporte';
import { HttpClient, HttpParams } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  getReportePorAgente(parametros: ParametrosReporte){
    let params = new HttpParams()
      .set('fechaDesde', parametros.fechaDesde.getTime().toString())
      .set('fechaHasta', parametros.fechaHasta.getTime().toString())
      .set('dniAgente', parametros.dniAgente);
    return this.http.get(`${REST_SERVER_URL}/polizas/reporte`, {params}).toPromise()
  }
}
