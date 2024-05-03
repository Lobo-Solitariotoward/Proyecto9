
for(let x=0; x < 5;x++){
    if(x==2)
    continue;
    console.log(x);
}


let a = 10;
a = a + 5;
a += 5;

let x = 10;
x **= 5;
console.log(x);

//Tipo Fecha
const fecha = new Date();
console.log(fecha);

function myFunction(p1,p2){
    return p1 * p2;
}
console.log(myFunction(5,6));
console.log(myFunction());
console.log(myFunction(8));
console.log(myFunction);

let otraFuncion = (a,b) => a * b;
console.log(otraFuncion(5,10));
console.log(otraFuncion);

let otraFuncion2 = (a,b) => {
    return a * b;
}
console.log(otraFuncion2(4,80));

//Funcion ejecutable
//Funcionn anonima
(() => console.log('Función anónima autoejecutable'))();

let alumno = {
    nombre: "Sol",
    apellido: "Aguilar",
    matricula: 80234,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
};

console.log(alumno.nombreCompleto());