import { Component, OnInit } from '@angular/core';
import ParametrosReporte from '../domain/ParametrosReporte';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogoReporteComponent } from './dialogo-reporte/dialogo-reporte.component';

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

  fechaDesdeControl = new FormControl('', [
    Validators.required,
  ]);

  fechaHastaControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public dialog: MatDialog) {
    this.parametrosReporte = new ParametrosReporte()
  }

  ngOnInit() {
  }

  tieneErrores() {
    return this.dniAgenteFormControl.errors !== null || this.fechaDesdeControl.errors !== null || this.fechaHastaControl.errors !== null || this.fechaDesdePosteriorAHasta()
  }

  fechaDesdePosteriorAHasta() {
    return this.parametrosReporte.fechaDesde > this.parametrosReporte.fechaHasta
  }

  mostrarReporte() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.parametrosReporte;
    dialogConfig.maxHeight = '2000px';
    dialogConfig.maxWidth = '1000px';

    const dialogRef = this.dialog.open(DialogoReporteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
