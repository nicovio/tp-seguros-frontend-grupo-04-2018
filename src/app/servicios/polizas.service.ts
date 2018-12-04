import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
import Poliza from '../domain/Poliza';

@Injectable({
  providedIn: 'root'
})
export class PolizasService {

  constructor(private http: Http) { }

  async getPolizas() {
    const res = await this.http.get(REST_SERVER_URL + '/polizas/').toPromise()
    return res.json().map(Poliza.fromJSON)
  }

  async cambiarEstado(idPoliza: number, idEstado: number) {
    const json = JSON.parse('{ "id_estado": ' + String(idEstado) + ' }')
    return this.http.put(REST_SERVER_URL + "/polizas/cambiarEstado/" + idPoliza, json).toPromise()
  }

}
