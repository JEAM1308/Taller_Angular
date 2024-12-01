import { Profesor } from "./profesor";
import { Materia } from "../materia/materia";

export class ProfesorDetail extends Profesor {
    materias: Array<Materia> = [];

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        foto: string,
        calificacion: number,
        cobro: number,
        correo: string,
        formacion: string,
        descripcion: string,
        video: string,
        presencial: boolean,
        materias: Array<Materia>
    ){    
        super(id, nombre, apellido, foto, calificacion, cobro, correo, formacion, descripcion, video, presencial);
        this.materias = materias;
    }
} 