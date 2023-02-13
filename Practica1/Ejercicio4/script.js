var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, ", Edad: ").concat(this.edad, ", Curso: ").concat(this.curso));
    };
    return Alumno;
}());
var alumno = new Alumno("Pedro López", 18, "1CFSJ");
alumno.mostrarDatos();
