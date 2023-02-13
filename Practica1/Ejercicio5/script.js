var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    return Alumno;
}());
var Curso = /** @class */ (function () {
    function Curso(nombreCurso, alumno) {
        this.nombreCurso = nombreCurso;
        this.alumno = alumno;
    }
    Curso.prototype.mostrarInfo = function () {
        alert("Mi nombre es ".concat(this.alumno.nombre, "\nTengo ").concat(this.alumno.edad, " a\u00F1os\nEstoy en ").concat(this.alumno.curso, " ").concat(this.nombreCurso));
    };
    return Curso;
}());
var alumno = new Alumno("Pedro López", 18, "1CFSJ");
var curso = new Curso("Primer curso de grado superior de DAW", alumno);
curso.mostrarInfo();
