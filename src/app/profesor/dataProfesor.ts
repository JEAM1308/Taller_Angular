import { ProfesorDetail } from "./profesordetail";
import { dataMaterias } from "../materia/dataMateria";

export const dataProfesores = [
  new ProfesorDetail(
    1,
    "Juan",
    "Pérez",
    "url_foto_1.jpg",
    4.8,
    25000,
    "juan.perez@email.com",
    "Licenciado en Matemáticas",
    "Profesor con 10 años de experiencia en matemáticas y física",
    "url_video_1.mp4",
    true,
    [dataMaterias[6], dataMaterias[3]] // Cálculo y Física
  ),

  new ProfesorDetail(
    2,
    "María",
    "González",
    "url_foto_2.jpg",
    4.9,
    30000,
    "maria.gonzalez@email.com",
    "Doctora en Literatura",
    "Especialista en literatura latinoamericana",
    "url_video_2.mp4",
    false,
    [dataMaterias[1]] // Español
  ),

  new ProfesorDetail(

    3,

    "Carlos",

    "Rodríguez",

    "url_foto_3.jpg",

    4.7,

    28000,

    "carlos.rodriguez@email.com",

    "Máster en Química",

    "Experiencia en investigación y docencia universitaria",

    "url_video_3.mp4",

    true,

    [dataMaterias[4]] // Química

  ),

  new ProfesorDetail(

    4,

    "Ana",

    "Martínez",

    "url_foto_4.jpg",

    4.9,

    32000,

    "ana.martinez@email.com",

    "Doctora en Filosofía",

    "Especialista en ética y filosofía contemporánea",

    "url_video_4.mp4",

    false,

    [dataMaterias[7]] // Filosofía

  ),

  new ProfesorDetail(

    5,

    "Luis",

    "Sánchez",

    "url_foto_5.jpg",

    4.6,

    27000,

    "luis.sanchez@email.com",

    "Ingeniero en Sistemas",

    "Experto en programación y desarrollo web",

    "url_video_5.mp4",

    true,

    [dataMaterias[9]] // Informática

  ),

  new ProfesorDetail(

    6,

    "Patricia",

    "López",

    "url_foto_6.jpg",

    4.8,

    29000,

    "patricia.lopez@email.com",

    "Licenciada en Biología",

    "Investigadora en biología molecular",

    "url_video_6.mp4",

    true,

    [dataMaterias[5]] // Biología

  ),

  new ProfesorDetail(

    7,

    "Roberto",

    "García",

    "url_foto_7.jpg",

    4.7,

    26000,

    "roberto.garcia@email.com",

    "Máster en Economía",

    "Consultor financiero y profesor universitario",

    "url_video_7.mp4",

    false,

    [dataMaterias[8]] // Economía

  ),

  new ProfesorDetail(

    8,

    "Carmen",

    "Torres",

    "url_foto_8.jpg",

    4.9,

    31000,

    "carmen.torres@email.com",

    "Licenciada en Artes",

    "Artista plástica con exposiciones internacionales",

    "url_video_8.mp4",

    true,

    [dataMaterias[0]] // Artes

  ),

  new ProfesorDetail(

    9,

    "Miguel",

    "Ramírez",

    "url_foto_9.jpg",

    4.8,

    28000,

    "miguel.ramirez@email.com",

    "Máster en Física",

    "Investigador en física cuántica",

    "url_video_9.mp4",

    true,

    [dataMaterias[3]] // Física

  ),

  new ProfesorDetail(

    10,

    "Laura",

    "Díaz",

    "url_foto_10.jpg",

    4.7,

    27000,

    "laura.diaz@email.com",

    "Doctora en Lingüística",

    "Especialista en enseñanza de idiomas",

    "url_video_10.mp4",

    false,

    [dataMaterias[2]] // Inglés

  ),

  new ProfesorDetail(

    11,

    "Fernando",

    "Morales",

    "url_foto_11.jpg",

    4.8,

    29500,

    "fernando.morales@email.com",

    "PhD en Matemáticas",

    "Especialista en álgebra avanzada y cálculo",

    "url_video_11.mp4",

    true,

    [dataMaterias[6]] // Cálculo

  ),

  new ProfesorDetail(

    12,

    "Diana",

    "Herrera",

    "url_foto_12.jpg",

    4.9,

    33000,

    "diana.herrera@email.com",

    "Máster en Filosofía",

    "Experta en filosofía antigua y moderna",

    "url_video_12.mp4",

    false,

    [dataMaterias[7]] // Filosofía

  )

];


