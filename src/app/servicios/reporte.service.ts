import { Injectable } from '@angular/core';
import ParametrosReporte from '../domain/ParametrosReporte';
import { HttpClient, HttpParams } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';
import LineaReporte from '../domain/LineaReporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  getReportePorAgente(parametros: ParametrosReporte){
    let params = new HttpParams()
      .set('fechaDesde', this.getFormattedDate(parametros.fechaDesde))
      .set('fechaHasta', this.getFormattedDate(parametros.fechaHasta))
      .set('dniAgente', parametros.dniAgente);
    return this.http.get<LineaReporte[]>(`${REST_SERVER_URL}/polizas/reporte`, {params}).toPromise()
    .then(lineas => {
      return lineas.map(linea => LineaReporte.fromJSON(linea))
    })
  }

  getFormattedDate(date: Date){
    return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
}
