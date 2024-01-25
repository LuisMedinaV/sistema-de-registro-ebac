/*
console.log("Agregar alumno");
console.log("Buscar alumno");
console.log("Eliminar alumno");

 */
// Imprimir mensaje de bienvenida en la computadora
console.log("Sistema EBAC de Registro de Alumnos"); 


// Arreglo de diferentes registros que mostrara el archivo cunado se solicite la consulta, mostrando los alumnos de ebac
var registro= [
    {nombre: "Luis Medina", edad: "28", zonaResidencia: "Aguascalientes", nombrePrograma: "Back end Java", email: "luis.medinavelarde@gmail.com"},
    {nombre: "Fabiola Medina", edad: "33", zonaResidencia: "CDMX", nombrePrograma: "Front end Java", email: "fabiola.mv@hotmail.com"},
    {nombre: "Juan Perez", edad: "30", zonaResidencia: "Queretaro", nombrePrograma: "Data Analyst", email: "juanp@hotmail.com"},
    {nombre: "Olga Torres", edad: "78", zonaResidencia: "Monterrey", nombrePrograma: "Data Science", email: "Olga_torres@hotmail.com"},
    {nombre: "Salvador Campos", edad: "55", zonaResidencia: "Queretaro", nombrePrograma: "Back end Java", email: "Scampos@hotmail.com"},

];
//Funcion que permite arreglar un nuevo alumno al arreglo de registro
function agregarAlumnos(){

    //Se solicita informacion al usuario para el registro de un nuevo alumno
    var nombre= prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia= prompt("Ingresa la zona de residencia del alumno");
    var edad= prompt("Ingresa la edad del alumno");
    var nombrePrograma= prompt("Ingresa el nombre del programa a estudiar");
    var email= prompt("Ingresar correo electronico");

    // Crea un objeto que se llama nuevo alumno con los datos ingresados
    var nuevoAlumno={nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email}; 
    
    // Agrega la informacion de nuevoAlumno al arreglo
    registro.push(nuevoAlumno); 
}

// Informacion a mostrar tomada de los registros anteriores realizada por el ciclo FOR
function consultarRegistros(){
    for(var i=0; i< registro.length;i++){ // Ciclo for donde tenemos el contador i que inicia en 0 e ira iterando respecto a la longitud de la variable registro, en cada iteracion mostrar el valor del registrod e i, hasta que este sea igual a length
       
        // Esta lista de consoloe.log permite ver al usuario el registro en la consola
        console.log("Nombre " + registro[i].nombre);
        console.log("Zona Residencia " + registro[i].zonaResidencia);
        console.log("Edad " + registro[i].edad);
        console.log("Programa de Estudio " + registro[i].nombrePrograma);
        console.log("Correo Electronico " + registro[i].email);
    };
}

//Esta funcion permite generar un nuevo arreglo que no contenga la informacion del alumno deseado
function eliminarAlumno(){

    // Solicita al usuario el nombre del alumno a eliminar
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

    //Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar
    registro=registro.filter(alumno => alumno.nombre !== nombreAeliminar);
}

do{ // Ciclo do while permite repetir el menu hasta que no se cumpla la condicion

    // Variable que toma la eleccion del usuario para ejecutar la funcion indicada
var opcion = prompt("Seleccione una opcion: \n1. Agregar registro \n2. Consultar registros de nuevos alumnos \n3. Eliminar registro \n4. Salir "); // Aparece en pantalla las opciones donde el usuario tiene que seleccionar una opcion


// Se declara este if para dar a elegir al usuario la opcion que desee
if (opcion=== "1"){
    agregarAlumnos(); // Si se selecciona 1 se activara la funcion agregar alumnos que esta escrita en la parte de arriba
}else if (opcion === "2"){
    consultarRegistros(); // Si se selecciona 2 se activara la funcion consultarregitros que nos permitira ver las alumnos almacenados
}else if (opcion === "3"){
        eliminarAlumno(); // Si selecciona opcion 3 se activara la funcion eliminarAlumno del registro
}else if ("Salida"){
    alert("Salida del sistema");
}else {
    alert("Opcion invalida, ingresa otra");
}

    var continuar = prompt("Desea hacer otra accion? (S/N) "); // Si se coloca s seleccionaremos otra opcion si colocamos N o cualquier otra tecla termina el programa

} while(continuar === "s");











