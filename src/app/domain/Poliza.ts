import Estado from "./Estado";

export default class Poliza {
    id: number;

    fecha_inicio: Date;

    fecha_fin: Date;

    prima: number;

    porcentaje_de_comision: number;

    id_estado: number;

    tipo: String;

    estado: Estado;

    constructor(){
        this.estado = new Estado()
    }

    toJSON(): any {
        const result: any = Object.assign({}, this);
        return result;
    }

    static fromJSON(polizaJSON) {
        const result: Poliza = Object.assign(new Poliza(), polizaJSON);
        result.estado = Estado.fromJSON(polizaJSON.estado)
        return result
    }
}