import { Component, OnInit } from '@angular/core';
import ParametrosReporte from '../domain/ParametrosReporte';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  parametrosReporte: ParametrosReporte

  dniAgenteFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.min(1000000),
    Validators.max(99999999)
  ]);

  constructor() {
    this.parametrosReporte = new ParametrosReporte()
  }

  ngOnInit() {
  }

  tieneErrores() {
    return this.dniAgenteFormControl.errors !== null
  }

}
