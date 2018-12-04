export default class Estado {
    id: number;
    descripcion: String;

    static fromJSON(estadoJSON) {
        const result: Estado = Object.assign(new Estado(), estadoJSON);
        return result
    }
}