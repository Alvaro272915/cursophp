const jsongrupofamiliar = [
		{
			"nombre": "Alvaro",
			"apellidos": "Urrego Viana",
			"edad": "49 Años",
			"tipoAfiliacion": "Afiliado",
			"parentesco": ""
		},
		{
			"nombre": "Maria Camila",
			"apellidos": "Urrego Rodriguez",
			"edad": "14 Años",
			"tipoAfiliacion": "Beneficiario",
			"parentesco": "Hija"
		},
		{
			"nombre": "Maria Melva",
			"apellidos": "Viana de Urrego",
			"edad": "87 Años",
			"tipoAfiliacion": "Beneficiario",
			"parentesco": "Madre"
		},
		{
			"nombre": "Pedro Pablo",
			"apellidos": "Urrego",
			"edad": "92 Años",
			"tipoAfiliacion": "Beneficiario",
			"parentesco": "Padre"
		},						
	]
function grupofamiliar(arreglogrupofamiliar){
    let lista = "<tr><th>Nombres</th><th>Apellido</th><th>Edad</th><th>Tipo Afiliacion</th><th>Parentesco</th></tr>"
    arreglogrupofamiliar.forEach(element => {
		lista += "<tr>"
		lista += `<td>${element.nombre}</td><td>${element.apellidos}</td><td>${element.edad}</td><td>${element.tipoAfiliacion}</td><td>${element.parentesco}</td>`
		lista += "</tr>"
	});
    document.getElementById('tablagrupofamiliar').innerHTML = lista
}


grupofamiliar(jsongrupofamiliar)

