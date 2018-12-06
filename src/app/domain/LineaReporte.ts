export default class LineaReporte {

    tipo: String;

    id_estado: number;

    estado: String;

    cantidad: number;

    valor_prima: number;
0
    toJSON(): any {
        const result: any = Object.assign({}, this);
        return result;
    }

    static fromJSON(reporteJSON) {
        const result: LineaReporte = Object.assign(new LineaReporte(), reporteJSON);
        return result
    }

    static getMapaLineas(lineas): any{
        const mapa = lineas.reduce((mapa, linea) => {
            mapa[linea.tipo.toLowerCase()][linea.estado.toLowerCase().replace(' ', '_')].cantidad += linea.cantidad
            mapa[linea.tipo.toLowerCase()][linea.estado.toLowerCase().replace(' ', '_')].valor += linea.valor_prima
            mapa[linea.tipo.toLowerCase()].cantidad_total += linea.cantidad
            mapa[linea.tipo.toLowerCase()].valor_total += linea.valor_prima
            mapa.totales.cantidad += linea.cantidad
            mapa.totales.valor += linea.valor_prima
            return mapa
        }, {vida: {tipo: "Vida", en_curso: {cantidad: 0, valor: 0}, suspendido: {cantidad: 0, valor: 0}, anulado: {cantidad:0, valor: 0}, finalizado: {cantidad:0, valor: 0}, valor_total: 0, cantidad_total: 0}, 
            hogar: {tipo: "Hogar", en_curso: {cantidad: 0, valor: 0}, suspendido: {cantidad: 0, valor: 0}, anulado: {cantidad:0, valor: 0}, finalizado: {cantidad:0, valor: 0}, valor_total: 0, cantidad_total: 0}, 
            automovil: {tipo: "Automovil", en_curso: {cantidad: 0, valor: 0}, suspendido: {cantidad: 0, valor: 0}, anulado: {cantidad:0, valor: 0}, finalizado: {cantidad:0, valor: 0}, valor_total: 0, cantidad_total: 0},
            totales: {cantidad: 0, valor: 0}})
        return mapa
    }
}