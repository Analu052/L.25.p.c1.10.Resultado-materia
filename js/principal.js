/*RESULTADOS MATERIA 
Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes 
aprueban con 48Ptos. 
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de 
aprobados, cantidad de reprobados y nota promedio de la sección. 
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos), 
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y 
222 (60Ptos), la salida que se espera es como la siguiente: 
Cantidad de aprobados: 6 
Cantidad de reprobados: 2
Nota promedio de la sección: 57.25 */

import Cl_asignatura from "./Cl_asignatura.js";
import Cl_estudiante from "./Cl_estudiante.js";

let estudiante1 = new Cl_estudiante(888, 60);
let estudiante2 = new Cl_estudiante(777, 50);
let estudiante3 = new Cl_estudiante(999, 40);
let estudiante4 = new Cl_estudiante(333, 80);
let estudiante5 = new Cl_estudiante(111, 30);
let estudiante6 = new Cl_estudiante(666, 90);
let estudiante7 = new Cl_estudiante(444, 48);
let estudiante8 = new Cl_estudiante(222, 60);

let asignatura=new Cl_asignatura();
asignatura.procesarEstudiante(estudiante1);
asignatura.procesarEstudiante(estudiante2);
asignatura.procesarEstudiante(estudiante3);
asignatura.procesarEstudiante(estudiante4);
asignatura.procesarEstudiante(estudiante5);
asignatura.procesarEstudiante(estudiante6);
asignatura.procesarEstudiante(estudiante7);
asignatura.procesarEstudiante(estudiante8);

let salida=document.getElementById("salida");
salida.innerHTML= `Resultados:
<br> Cantidad de aprobados: ${asignatura.cantA()}
<br> Cantidad de reprobados: ${asignatura.cantR()}
<br> Nota promedio de la seccion: ${asignatura.promS()}` ;