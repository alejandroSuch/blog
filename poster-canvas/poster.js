

$(document).ready(function(){
	var canvas = document.getElementById('micanvas')
	var canvasW;
	var canvasH;
	var ctx;
	var width;
	var height;
	var height_percent = 0.1;
		
	var drawCorners = function(){
		//Dibujamos el rectángulo azul alrededor de la imagen
		ctx.strokeStyle = '#1A76B6' //Color de línea
		ctx.lineWidth = 3 //Grosor del trazo
		ctx.beginPath();  
		
		//Primera esquina
		ctx.moveTo(
			((canvasW-width)/2)-5,
			(canvasH*height_percent)-5
		);
		
		//Segunda esquina
		ctx.lineTo(
			((canvasW-width)/2) + width + 5, 
			(canvasH*height_percent)-5
		);
		
		//Tercera esquina
		ctx.lineTo(
			((canvasW-width)/2) + width + 5, 
			(canvasH*height_percent)+height+5
		);
		
		//Última esquina
		ctx.lineTo(
			((canvasW-width)/2)-5, 
			(canvasH*height_percent)+height+5
		);
		
		//Cerramos el rectángulo y pintamos
		ctx.closePath();  
		ctx.stroke();
	}
	
	var writeText = function(){
		//Añadimos texto
		ctx.fillStyle = "#1A76B6";
		ctx.font = "24pt Times New Roman";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText("HOMER SIMPSON", canvasW / 2 , (canvasH*height_percent)+height+30);
		
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "12pt Arial";
		ctx.fillText("Daría mucho miedo si fuera real", canvasW / 2 , (canvasH*height_percent)+height+60);
	}
	
	if(canvas.getContext){
		//Accedemos al contexto de renderizado
		ctx = canvas.getContext('2d')
		
		//Obtenemos las propiedades de alto y ancho del canvas
		canvasW = $('#micanvas').attr('width')
		canvasH = $('#micanvas').attr('height')

		//Definimos un color de relleno, y dibujamos un rectángulo de ese color
		ctx.fillStyle = 'rgb(0,0,0)'
		ctx.fillRect (0, 0, canvasW, canvasH)
		
		var img = new Image();   // Create new img element					
		//img.src = 'file:///C:/Users/Alex/Pictures/foto.jpg'
		img.src = 'http://media.filmschoolrejects.com/images/untooned-homer.jpg'
		img.onload = function(){
			var imgH = img.height
			var imgW = img.width
			width = 0
			height = 0
			
			if(imgH > imgW){ //Ajustamos al alto
				height = canvasH * 0.65
				width  = imgW * height / imgH
			} else { //Ajustamos al ancho
				width  = canvasW * 0.8
				height = imgH * width / imgW
			}
			
			
			
			//Dibujamos la imagen
			ctx.drawImage(img, (canvasW-width)/2, canvasH*height_percent, width, height);
			
			//Pitamos las líneas
			drawCorners();
			
			//Escribimos el texto
			writeText();
		}
	} else {
		alert('No se puede acceder al contexto de renderizado.')
	}
});