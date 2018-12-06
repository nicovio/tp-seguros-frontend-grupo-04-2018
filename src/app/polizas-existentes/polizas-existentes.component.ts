import { Component, OnInit } from '@angular/core';
import Poliza from '../domain/Poliza';
import { PolizasService } from '../servicios/polizas.service';
import { mostrarError } from '../errorHandler/ErrorHandler';
import Estado from '../domain/Estado';
import { EstadosService } from '../servicios/estados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'polizas-existentes',
  templateUrl: './polizas-existentes.component.html',
  styleUrls: ['./polizas-existentes.component.scss']
})
export class PolizasExistentesComponent implements OnInit {

  polizas: Array<Poliza> = []
  errors = []
  polizaSeleccionada: Poliza = new Poliza()
  selectedRow: Number;
  textoBusqueda: String = ''
  estadoSeleccionado: Estado
  estados: Array<Estado>

  constructor(private polizasService: PolizasService, private estadosService: EstadosService, private router: Router) {
    try {
      this.estadoSeleccionado = new Estado()
      this.estadoSeleccionado.descripcion = "Cambiar estado"
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }
  }

  async initialize() {
    try {
      this.polizas = await this.polizasService.getPolizas()
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async prepararModal() {
    this.estadoSeleccionado = new Estado()
    this.estadoSeleccionado.descripcion = "Cambiar estado"
    this.estados = await this.estadosService.getEstados(this.polizaSeleccionada.estado.id)
  }

  setPoliza(poliza: Poliza) {
    this.polizaSeleccionada = poliza
  }

  setClickedRow(index: number) {
    this.selectedRow = index
  }

  noPuedeCambiarEstado() {
    return this.selectedRow === undefined
  }

  borrarBusqueda() {
    this.desseleccionarPoliza()
    this.textoBusqueda = ''
  }

  desseleccionarPoliza() {
    this.selectedRow = undefined
  }

  estadoPolizaSeleccionada() {
    return this.polizaSeleccionada.estado.descripcion
  }

  enCurso() {
    return this.estadoPolizaSeleccionada() === 'En Curso';
  }

  suspendido() {
    return this.estadoPolizaSeleccionada() === 'Suspendido';

  }

  async aceptar() {
    try {
      await this.polizasService.cambiarEstado(this.polizaSeleccionada.id, this.estadoSeleccionado.id)
    } catch (e) {
      this.errors.push(e._body)
    }
    this.resfrescarPantalla()
  }

  resfrescarPantalla() {
    this.router.navigateByUrl('/refrescar-pantalla', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/polizas-existentes"]));
  }



  noSeleccionoNuevoEstado() {
    return this.estadoSeleccionado.descripcion === "Cambiar estado"
  }

  ngOnInit() {
  }

}