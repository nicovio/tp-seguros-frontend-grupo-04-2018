import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReporteService } from 'src/app/servicios/reporte.service';
import ParametrosReporte from 'src/app/domain/ParametrosReporte';
import LineaReporte from 'src/app/domain/LineaReporte';

@Component({
  selector: 'app-dialogo-reporte',
  templateUrl: './dialogo-reporte.component.html',
  styleUrls: ['./dialogo-reporte.component.scss']
})
export class DialogoReporteComponent implements OnInit {
  
  cargando: boolean = true;
  lineas;
  mapa;

  constructor(
    public dialogRef: MatDialogRef<DialogoReporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ParametrosReporte,
    private reporteService: ReporteService) {}
  
  ngOnInit(): void {
    this.reporteService.getReportePorAgente(this.data)
    .then(lineas => {
      console.log(lineas)
      let self = this
      setTimeout(() => {
        this.mapa = LineaReporte.getMapaLineas(lineas)
        this.lineas = [this.mapa.vida, this.mapa.hogar, this.mapa.automovil]
        self.cargando = false
      }, 2000)
    })
    .catch(err => {
      console.error(err)
    })
  }
    
  onCloseClick(): void {
    this.dialogRef.close();
  }

}
