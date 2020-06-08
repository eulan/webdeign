(function(){ //nos asegura que se ejecuta una vez
	"use strict";
	var regalo = document.getElementById('regalo');
	document.addEventListener('DOMContentLoaded', function(){
	//Campos datos usuarios


	if(document.getElementById("mapa")){
	var map = L.map('mapa').setView([3.570727, -436.483265], 18);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

	L.marker([3.570727, -436.483265]).addTo(map)
    	.bindPopup('GDLWebCampo 2020 Boletos disponible')
    	.openPopup()
    	.bindTooltip('Un Tooltip')
    	.openTooltip();
    }

	var nombre = document.getElementById('nombre');
	var apellido = document.getElementById('apellido');
	var email = document.getElementById('email');;

	// Campos pases

	var pase_dia = document.getElementById('pase_dia');
	var pase_dosdias = document.getElementById('pase_dosdias');
	var pase_completo = document.getElementById('pase_completo');

	//botones y divs

	var calcular = document.getElementById('calcular');
	var errorDiv = document.getElementById('error');
	var botonRegistro = document.getElementById('btnRegistro');
	var listaProductos = document.getElementById('lista-productos');
	var suma = document.getElementById('suma-total');

	//Extras

	var etiquetas = document.getElementById('etiquetas');
	var camisas = document.getElementById('camisa_evento');


	console.log(nombre);
	calcular.addEventListener('click', calcularMontos);

	pase_dia.addEventListener('click' || 'blur', mostrarDias);
	pase_dosdias.addEventListener('click' || 'blur', mostrarDias);
	pase_completo.addEventListener('click' || 'blur', mostrarDias);

	nombre.addEventListener('blur', validarCampos);
	apellido.addEventListener('blur', validarCampos);
	email.addEventListener('blur', validarCampos);
	email.addEventListener('blur',validarMail);		

	function validarCampos(event){

		if(this.value == ''){
			errorDiv.style.display = 'block';
			errorDiv.innerHTML = "este campo es obligatorio";
			this.style.border = '1px solid red';
			errorDiv.style.border = '1px solid red';
		}else{
			errorDiv.style.display = 'none';
			this.style.border = '1px solid #cccccc';
		}	
	}

	function validarMail(event){
		if(this.value.indexOf("@") > -1){
			errorDiv.style.display = 'none';
			this.style.border = '1px solid #cccccc';
		}else{
			errorDiv.style.display = 'block';
			errorDiv.innerHTML = "Debe tener al menos un @";
			this.style.border = '1px solid red';
			errorDiv.style.border = '1px solid red';
		}
	}


	function calcularMontos(event){
		event.preventDefault();
		if(regalo.value === ''){
			alert("Debes elegir un regalo!");
		}
		else{
			var boletosDia = parseInt(pase_dia.value, 10)||0 ,
				boleto2Dias = parseInt(pase_dosdias.value, 10) ||0,
				boletosCompleto = parseInt(pase_completo.value, 10) ||0,
				cantCamisas = parseInt(camisas.value, 10) ||0,
				cantEtiquetas = parseInt(etiquetas.value,10) ||0;
				
			var totalPagar = 30*boletosDia + 50*boletosCompleto + 45*boleto2Dias+.93*cantCamisas*10 + cantEtiquetas*2;
			var listadoProductos = [];

			if(boletosDia >= 1){
				listadoProductos.push(boletosDia + ' pases por día');	
			}
			
			if(boleto2Dias>=1)
			listadoProductos.push(boleto2Dias + ' pases dos días');

			if(boletosCompleto >= 1)
			listadoProductos.push(boletosCompleto + ' pases completos');

			if(cantCamisas >= 1)
			listadoProductos.push(cantCamisas + ' camisas');

			if(cantEtiquetas >= 1)
			listadoProductos.push(cantEtiquetas + ' etiquetas');

			listaProductos.style.display = 'block';
			listaProductos.innerHTML = '';

			for (let i=0; i < listadoProductos.length;i++){
				listaProductos.innerHTML += listadoProductos[i] + '</br>';
			}

			suma.innerHTML = '$' + totalPagar.toFixed(2);

	
		}
	}

	function mostrarDias(event){
		var boletosDia = parseInt(pase_dia.value, 10)||0 ,
			boleto2Dias = parseInt(pase_dosdias.value, 10)||0,
			boletosCompleto = parseInt(pase_completo.value, 10)||0;

		var diasElegidos = [];
		console.log('lalalla');

		if(boletosDia > 0){
		diasElegidos.push('viernes');
		}

		if(boleto2Dias > 0)
		diasElegidos.push('viernes', 'sabado');

		if(boletosCompleto > 0)
		diasElegidos.push('viernes', 'sabado', 'domingo'); 

		for(let i = 0; i < diasElegidos.length;i++)
		document.getElementById(diasElegidos[i]).style.display = 'block';

	}

	});//DOM CONTENT LOADED
})();


$(function(){

	//lettering
	$('.nombre-sitio').lettering();

	//Mundo Fijo

	var windowHeight = $(window).height();
	var barraAltura = $('.barra').innerHeight(true);  
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if( scroll > windowHeight){
			$('.barra').addClass('fixed');
			$('body').css({'margin-top':barraAltura+'px'});
		}else{
			$('.barra').removeClass('fixed');
			$('body').css({'margin-top':'0px'});
		}
	});

	//menu responsive

	$('.menu-movil').on('click', function(){
		$('.navegacion-principal').slideToggle();
	});

	//Programa conferencia
	$('.programa-evento .info-curso:first').show();
	$('.menu-programa a:first').addClass('activo');
	$('.menu-programa a').on('click', function(){
		$('.menu-programa a').removeClass();
		$(this).addClass('activo');
		$('.ocultar').hide();
		var enlace = $(this).attr('href');
		$(enlace).fadeIn(1000);
		return false;
	});
	//Animaciones para los número

	$('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1200);
	$('.resumen-evento li:nth-child(2) p').animateNumber({number:15},1200);
	$('.resumen-evento li:nth-child(3) p').animateNumber({number:3},1200);
	$('.resumen-evento li:nth-child(4) p').animateNumber({number:9},1200);

	//Cuenta regresiva

	$('.cuenta-regresiva').countdown('2021/12/2 09:00:00', function(event){
		$('#dias').html(event.strftime('%D'));
		$('#horas').html(event.strftime('%H'));
		$('#minutos').html(event.strftime('%M'));
		$('#segundos').html(event.strftime('%S'));
	});
});