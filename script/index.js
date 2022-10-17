//La idea del proyecto es generar una shop customizado a un producto especifico, en este caso es
//una estanteria para supermercado o cualquier compercio. Surgen diferentes medidas y configiraciones que 
//en conjunto forman la estanteria.

//Creo array productos
const productos = [
    {id: 1, articulo:"Poste",seccion:"30x80", largo:2150, precio:10},
    {id: 2, articulo:"Poste",seccion:"30x90", largo:2150, precio:13},
    {id: 3, articulo:"Poste",seccion:"30x80", largo:1650, precio:8},
    {id: 4, articulo:"Poste",seccion:"30x90", largo:1650, precio:9},
]

const cuitCliente =["203030", "123456", "987654","204444","030345"];

//funcion carga cliente
function cargaCliente(cuit,empresa){
    this.cuit = cuit;
    this.empresa = empresa;
}

//armo funcion constructor
function cargaProducto(id, articulo, seccion, largo, precio){
    this.id=id;
    this.articulo=articulo;
    this.seccion=seccion;
    this.precio=precio;
}

//Cargo productos
const pieProductoA = new cargaProducto(5,"Pie","150 x 400","400",5);
const pieProductoB = new cargaProducto(6,"Pie","150 x 400","600",8);
const baldaA = new cargaProducto(7,"Balda","L400","400",2);
const baldaB = new cargaProducto(8,"Balda","L600","600",4);
const baldaC = new cargaProducto(9,"Balda","L800","800",6);
const estanteA = new cargaProducto(10,"Estante","400x1000","1000",10);
const estanteB = new cargaProducto(11,"Estante","600x1000","1000",14);
const estanteC = new cargaProducto(12,"Estante","800x1000","1000",16);

//funcion para agregar al array
function sumarArray(arr,valor){
    arr.push(valor);
}

sumarArray(productos, pieProductoA);
sumarArray(productos, pieProductoB);
sumarArray(productos, baldaA);
sumarArray(productos, baldaB);
sumarArray(productos, baldaC);
sumarArray(productos, estanteA);
sumarArray(productos, estanteB);
sumarArray(productos, estanteC);
console.log(productos);


//funciones de filtrado
function filtrarProducto(arr, filtro){
    const filtrado = arr.filter((el)=>{
        return el.articulo.includes(filtro);
    })
    return filtrado;
}

//let busqueda = prompt("Que producto quiere agregar?");
//console.log(filtrarProducto(productos, busqueda));

let bucleInicio = true;



for (let i= 3; i >= 0; i--){
    
        //Voy generando la interactividad de la pagina via Prompt
        let saludo = prompt("Hola, bienvenidos a la app para armar y calcular el costo de su proxima estanteria. \n Para poder comenzar e ingrese su cuit o nombre de empresa");
        //Busco una condicion para poder seguir con la app y de ser necesario agregar un objeto ("cliente")
        let esCliente = cuitCliente.find(el=> el.cuitCliente === saludo);
        console.log(esCliente);

        let esClienteT = cuitCliente.includes(saludo);
        console.log(esClienteT);

        if(esClienteT === true){
            alert("Datos correctos \n Cuit cliente n°: " + saludo)
            break;
        }else{
            alert("Por favor vuelva a ingresar" + "Quedan " + i + " intentos"  );  
        };
};

let bienvenido = "Bienvenido a estanterias Tito,  acontinuacion podra elegir que producto desea comprar."
let seleccionProducto = prompt("Seleccione el numero deproducto que desea comprar" + productos.id);





/* 
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
 */