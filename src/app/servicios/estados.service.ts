import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
import Estado from '../domain/Estado';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: Http) { }

  async getEstados() {
    const res = await this.http.get(REST_SERVER_URL + '/estados/').toPromise()
    return res.json().map(Estado.fromJSON)
  }

}
