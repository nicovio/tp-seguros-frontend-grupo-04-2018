import { Pipe, PipeTransform } from '@angular/core';
import Poliza from '../domain/Poliza';

@Pipe({
  name: 'filtrarSeguros'
})
export class FiltrarSegurosPipe implements PipeTransform {

  transform(polizas: Array<Poliza>, textoBusqueda?: string): any {
    if (textoBusqueda === '') {
      return polizas
    }
    return polizas.filter(poliza => this.coincideId(String(poliza.id), textoBusqueda) || this.contienteTexto(poliza.tipo, textoBusqueda) || this.contienteTexto(poliza.estado.descripcion, textoBusqueda))
  }

  coincideId(id1: String, textoBusqueda: String) {
    return id1 === textoBusqueda;
  }

  contienteTexto(texto: String, textoBusqueda: String) {
    return texto.toLocaleLowerCase().includes(textoBusqueda.toLocaleLowerCase())
  }




}
