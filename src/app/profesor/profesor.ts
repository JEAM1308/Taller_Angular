export class Profesor {
    id: number;
    nombre: string;
    apellido: string;
    foto: string;
    calificacion: number;
    cobro: number;
    correo: string;
    formacion: string;
    descripcion: string;
    video: string;
    presencial: boolean;
   
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
      presencial: boolean
    ) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.foto = foto;
      this.calificacion = calificacion;
      this.cobro = cobro;
      this.correo = correo;
      this.formacion = formacion;
      this.descripcion = descripcion;
      this.video = video;
      this.presencial = presencial;
    }
} 