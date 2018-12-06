import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReporteService } from 'src/app/servicios/reporte.service';
import ParametrosReporte from 'src/app/domain/ParametrosReporte';

@Component({
  selector: 'app-dialogo-reporte',
  templateUrl: './dialogo-reporte.component.html',
  styleUrls: ['./dialogo-reporte.component.scss']
})
export class DialogoReporteComponent implements OnInit {
  
  cargando: boolean = true;
  lineas = [
    {
      tipo: "Vida",
      en_curso: {
        cantidad: 121,
        valor: 212322.34
      },
      suspendida: {
        cantidad: 32,
        valor: 34323.54
      },
      anulada: {
        cantidad: 9,
        valor: 444321.00
      },
      finalizada: {
        cantidad: 940,
        valor: 93234332.32
      }
    }
  ]

  constructor(
    public dialogRef: MatDialogRef<DialogoReporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ParametrosReporte,
    private reporteService: ReporteService) {}
  
  ngOnInit(): void {
    this.reporteService.getReportePorAgente(this.data)
    .then(lineas => {
      let self = this
      setTimeout(() => {
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
