
	$(document).ready(function() {
		console.log('Prueba')
	});

	// Guardar el ID en el LocalStorage //

	function userID(){

		let nombre = document.getElementById("nombre-id").value;

		localStorage.setItem("Nombre", nombre);

		var namae = localStorage.getItem("Nombre");

		console.log(namae);
	
	}

	// Calculos de presupuesto //

	function tipoPagina(){

		var paginaSen = {
		  tipo: "Sencilla",
		  precio: 1000,
		  descripcion: "Pagina para emprendimientos pequeños o nuevos",
		};

		var paginaEla = {
		  tipo: "Elaborada",
		  precio: 2500,
		  descripcion: "Pagina para emprendimientos grandes y medianos",
		};

		var tipoSelect = document.getElementById("inputPag");
		tipoSelect.addEventListener("change", ()=> {
			console.log("Ha cambiado su seleccion de Pagina")
		})

		document.getElementById("inputPag").value;

	}

	function tipoPlan(){

		var planMen = {
		  tipo: "Mensual",
		  precio: 2000,
		  descripcion: "Plan de hosting que se renueva mensualmente, ideal para proyectos chicos con pocos recursos",
		};

		var planAnual = {
		  tipo: "Anual",
		  precio: 10000,
		  descripcion: "Plan de hosting anual, la mejor opcion para todos",
		};

		var tipoSelect = document.getElementById("inputPag2");
		tipoSelect.addEventListener("change", ()=> {
			console.log("Ha cambiado su seleccion de Plan")
		})

		document.getElementById("inputPag2").value;

	}

	function calcularPrecio(){

		var calcPagina = parseInt(document.getElementById("inputPag").value)
		var calcPlan = parseInt(document.getElementById("inputPag2").value)
		
		var costo = calcPagina + calcPlan;

		var precio = document.getElementById("toma-tu-precio");
		precio.innerText = costo;

	}

	// Boton //

	let boton = document.getElementById("boton");

	boton.addEventListener("click", ()=> {
		userID();
		calcularPrecio();
	});

	// Funciones inicializadas //

		tipoPagina();
		tipoPlan();