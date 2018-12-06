export default class Reporte {

    tipo: String;

    id_estado: number;

    estado: String;

    cantidad: number;

    valor_prima: number;

    toJSON(): any {
        const result: any = Object.assign({}, this);
        return result;
    }

    static fromJSON(reporteJSON) {
        const result: Reporte = Object.assign(new Reporte(), reporteJSON);
        return result
    }
}