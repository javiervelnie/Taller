$(function (){
    $("#btn_vehiculos").click(function () {
        location.href="vehiculos.html";
        crearBD();
    });

    $("#btn_recambios").click(function () {
        location.href="recambios.html";
		crearBD();
    });
});


/* INDEXDB TALLER */
var peticion, bd, almacenVehiculos, almacenRecambios;
function crearBD() {

		if (window.indexedDB) {
			peticion = window.indexedDB.open("taller", 1);
	
			peticion.onsuccess = function (event) {
				bd = peticion.result;
				var transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
	
				var almacenVehiculos = transaccion.objectStore("vehiculos");
				var almacenRecambios = transaccion.objectStore("recambios");
	
				/*COCHES*/
				almacenVehiculos.put({ id: 1, marca: "BMW", modelo: "Serie 1", color: "Azul", cv: 130, precio: 30400 });
				almacenVehiculos.put({ id: 2, marca: "BMW", modelo: "M2 Competition", color: "Gris", cv: 305, precio: 75650 });
				almacenVehiculos.put({ id: 3, marca: "BMW", modelo: "M8 Coupe Competition", color: "Azul Oscuro", cv: 765, precio: 192500 });
				almacenVehiculos.put({ id: 4, marca: "BMW", modelo: "X5 Hibrido Enchufable", color: "Blanco", cv: 500, precio: 82600 });
				/*--------------------------------------------------------------------------------------*/
				almacenVehiculos.put({ id: 5, marca: "Seat", modelo: "Ibiza", color: "Rojo", cv: 120, precio: 13320 });
				almacenVehiculos.put({ id: 6, marca: "Seat", modelo: "Leon", color: "Rojo", cv: 135, precio: 19160 });
				almacenVehiculos.put({ id: 7, marca: "Seat", modelo: "Tarraco", color: "Gris oscuro", cv: 140, precio: 30750 });
				almacenVehiculos.put({ id: 8, marca: "Seat", modelo: "Mii ELectric", color: "Negro", cv: 90, precio: 18800 });
				/*--------------------------------------------------------------------------------------*/
				almacenVehiculos.put({ id: 9, marca: "Volkswagen", modelo: "Polo", color: "Negro", cv: 100, precio: 15650 });
				almacenVehiculos.put({ id: 10, marca: "Volkswagen", modelo: "Golf", color: "Amarillo", cv: 120, precio: 26840 });
				almacenVehiculos.put({ id: 11, marca: "Volkswagen", modelo: "Passat", color: "Azul oscuro", cv: 140, precio: 32150 });
				almacenVehiculos.put({ id: 12, marca: "Volkswagen", modelo: "Arteon", color: "Amarillo", cv: 150, precio: 35630 });
	
	
				/*PIEZAS*/
				almacenRecambios.put({ id: 1, nombre:"Castrol Edge 5W30 Titanium", stock: 20, precio: 38.99 });
				almacenRecambios.put({ id: 2, nombre:"Krafft 50w30 Synthetic", stock: 18, precio: 32.85 });
				almacenRecambios.put({ id: 3, nombre:"Repsol Elite 5W30 Long Life", stock: 20, precio: 28.99 });
				almacenRecambios.put({ id: 4, nombre:"Total Quartz 7000 Energy", stock: 5, precio: 19.99 });
				almacenRecambios.put({ id: 5, nombre:"Total Quartz 7000 Energy 10w40", stock: 7, precio: 41.99 });
				almacenRecambios.put({ id: 6, nombre:"Castrol 10W40 Magnatec", stock: 7, precio: 23.99 });
				/*--------------------------------------------------------------------------------------*/
				almacenRecambios.put({ id: 7, nombre:"Filtro de aire Bosch para coche", stock: 74, precio: 12.60 });
				almacenRecambios.put({ id: 8, nombre:"Motul Liquido de frenos", stock: 32, precio: 14.98 });
				almacenRecambios.put({ id: 9, nombre:"Valeo Liquido de frenos", stock: 25, precio: 12.95 });
				almacenRecambios.put({ id: 10, nombre:"Castrol Liquido de frenos", stock: 12, precio: 18.50 });
				almacenRecambios.put({ id: 11, nombre:"Motul G2 Anticongelante", stock: 3, precio: 14.20 });
				almacenRecambios.put({ id: 12, nombre:"Krafft 82255 Anticongelante", stock: 24, precio: 12.95 });
				/*--------------------------------------------------------------------------------------*/
				almacenRecambios.put({ id: 13, nombre:"Bateria Volta 95 Ah +Dcha", stock: 3, precio: 73.49 });
				almacenRecambios.put({ id: 14, nombre:"Batería Bosch 45Ah S3 002", stock: 9, precio: 128.29 });
				almacenRecambios.put({ id: 15, nombre:"Philips 12972 Premium Luz de cruce", stock: 65, precio: 5.12 });
				almacenRecambios.put({ id: 16, nombre:"Luz de Cruce Philips 12972XV", stock: 66, precio: 20.92 });
				almacenRecambios.put({ id: 17, nombre:"Bosch Lampara intermitente", stock: 22, precio: 1.61 });
				almacenRecambios.put({ id: 18, nombre:"Bosch PY21W Intermitentes", stock: 14, precio: 6.95 });
				/*--------------------------------------------------------------------------------------*/
				almacenRecambios.put({ id: 19, nombre:"Hella Lampara de marcha atras", stock: 35, precio: 5.85 });
				almacenRecambios.put({ id: 20, nombre:"Philips H11 Antinieblas Del.", stock: 32, precio: 18.34 });
				almacenRecambios.put({ id: 21, nombre:"Philips Whitevision Antinieblas Del.", stock: 29, precio: 12.10 });
				almacenRecambios.put({ id: 22, nombre:"Philips W5W Luz de posicion", stock: 80, precio: 1.80 });
				almacenRecambios.put({ id: 23, nombre:"Osram Luz de Posicion", stock: 78, precio: 6.84 });
				almacenRecambios.put({ id: 24, nombre:"Philips M-Tech Luz de freno", stock: 42, precio: 3.80 });
				/*--------------------------------------------------------------------------------------*/
				almacenRecambios.put({ id: 25, nombre:"Bosch Limpiaparabrisas", stock: 45, precio: 16.07 });
				almacenRecambios.put({ id: 26, nombre:"Bosch MK Limpiaparabrisas", stock: 31, precio: 18.10 });
				almacenRecambios.put({ id: 27, nombre:"Parasol forrado con aluminio", stock: 12, precio: 1.16 });
				almacenRecambios.put({ id: 28, nombre:"Beikell cargador USB de doble puerto", stock: 18, precio: 6.59 });
				almacenRecambios.put({ id: 29, nombre:"Lencent Transmisor FM Bluetooth", stock: 5, precio: 12.74 });
				almacenRecambios.put({ id: 30, nombre:"AUTO-T Kit manos libres", stock: 9, precio: 26.56 });
	
			};
	
	
			peticion.onerror = function (evento) {
				console.log("No se ha creado la base de datos: " + evento.target.errorCode);
			};
	
	
			peticion.onupgradeneeded = function (evento) {
	
				bd = peticion.result;
	
				var almacenVehiculos = bd.createObjectStore("vehiculos", { keyPath: "id" });
				var almacenRecambios = bd.createObjectStore("recambios", { keyPath: "id" });
	
				almacenVehiculos.createIndex("por_id", "id", { unique: true });
				almacenVehiculos.createIndex("por_marca", "marca", { unique: false });
				almacenVehiculos.createIndex("por_cv", "cv", { unique: false });
				almacenVehiculos.createIndex("por_precio", "precio",  { unique: false });
	
				almacenRecambios.createIndex("por_id", "id", { unique: true });
				almacenRecambios.createIndex("por_nombre", "nombre",  { unique: false });
				almacenRecambios.createIndex("por_stock", "stock", { unique: false });
				almacenRecambios.createIndex("por_precio", "precio", { unique: false });
	
			};
	
	
		} else {
			console.log("IndexedDB no está soportado");
		}
}
document.querySelector("body").addEventListener("load", crearBD());

function vaciarSessionStorage(){
    sessionStorage.clear();
}

document.querySelector("#cerrar_sesion").addEventListener('click', vaciarSessionStorage);