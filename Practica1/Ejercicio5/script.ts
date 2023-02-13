class Alumno {
  nombre: string;
  edad: number;
  curso: string;

  constructor(nombre: string, edad: number, curso: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }
}

class Curso {
  nombreCurso: string;
  alumno: Alumno;

  constructor(nombreCurso: string, alumno: Alumno) {
    this.nombreCurso = nombreCurso;
    this.alumno = alumno;
  }

  mostrarInfo() {
    alert(`Mi nombre es ${this.alumno.nombre}
Tengo ${this.alumno.edad} años
Estoy en ${this.alumno.curso} ${this.nombreCurso}`);
  }
}

const alumno = new Alumno("Pedro López", 18, "1CFSJ");
const curso = new Curso("Primer curso de grado superior de DAW", alumno);
curso.mostrarInfo();