export default class ParametrosReporte {

    dniAgente: string;

    fechaDesde: Date;

    fechaHasta: Date;

    toJSON(): any {
        const result: any = Object.assign({}, this);
        return result;
    }
}