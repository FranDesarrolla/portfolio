
	$(document).ready(function() {
		console.log('El navegador funciona correctamente')
	});

	$(".name-click").click(function() {
		alert("Tu nombre sera utilizado para futuros usos en nuestra web. Escribe bien tu nombre, sin simbolos extraños ni numeros.")
	});

	$(".tipo-click").click(function() {
		alert("Los precios de los tipos de pagina estan sujetos a cambios, son actualizados constantemente. Elija la mejor opcion para lo que le convenga. Paginas simples para emprendimientos chicos y paginas elaboradas para emprendimientos grandes")
	});

	$(".plan-click").click(function() {
		alert("Los planes son sacados de paginas recomendables como Hostinger o GoDaddy. Elija la mejor opcion para su emprendimiento, recuerde que el pago se renueva mensualmente o anualmente dependiendo el precio escogido.")
	});

	$(".secc-click").click(function() {
		alert("Dependiendo de la cantidad de secciones seleccionadas el precio varia, el precio si son '2 o menos' o '5 o mas' tambien varia dependiendo de la cantidad final aclarada por el cliente. Las secciones son como su nombre lo indica las secciones de una web, por ejemplo, 'Galeria', 'Contacto', 'Blog', etc. ")
	});

	$(".seo-click").click(function() {
		alert("El SEO es una serie de pasos que debemos tomar los desarrolladores para que su pagina pueda ser encontrada con mas facilidad en los buscadores, como si de un ranking se tratara, conseguir popularidad para su pagina trae beneficios. Es muy recomendable el SEO en una web comercial.")
	});

	$("botones").click(function() {})
		$("img.botones").hide("fast",function() {		
		});

	$("botones").click(function() {})
		$("img.botones").show("fast",function() {		
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

		var calcSecciones = parseInt(document.getElementById("inputPag3").value)
		var calcSeo = parseInt(document.getElementById("inputPag4").value)

		var secc1 = calcPagina + calcPlan;
		var secc2 = calcSecciones + calcSeo;

		var costo = secc1 + secc2;

		var precio = document.getElementById("toma-tu-precio");
		precio.innerText = costo + "$";

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