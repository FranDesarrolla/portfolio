
	function tipoPagina(){

		var pagina = [

		  this.tipo = tipo,
		  this.precio = precio,

		]

		const Paginas = [

		new pagina("sencilla",1000),
		new pagina("elaborada",2500),

		]
	}

	function calcularPrecio(){

		var calcPagina = parseInt(document.getElementById("inputPag").value)
	
		var costo = calcPagina

		var precio = document.getElementById("toma-tu-precio");
		precio.innerText = costo;
	}