var posX, posY; //bola
var fx = 900;
var fy = 600;


// POSIÇÕES DE TODOS OS QUADRADOS

var x = 20 //quadrado
var y = 200; //quadrado

var x1 = 160; //quadrado1
var y1= 200; //quadrado1

var x2 = 300; //quadrado2
var y2= 200; //quadrado2

var x3 = 440; //quadrado3
var y3= 200; //quadrado3

var x4 = 580; //quadrado4
var y4= 200; //quadrado4

var x5 = 720; //quadrado5
var y5= 200; //quadrado5

var x6 = 860; //quadrado6
var y6= 200; //quadrado6

var bg;

var tamBloco = 90;

var vidas = 3;
var pontos = 0;

function preload(){
  //load images
  //bg = loadImage("");
  //nave = loadImage("nave.jpg");
  }

cenario = [
 	["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
 	["#", "c", "c", "c", "c", "c", "c", "c", "c", "#"],
 	["#", "c", "c", "c", "c", "c", "c", "c", "c", "#"],
 	["#", "c", "c", "c", "c", "c", "c", "c", "c", "#"],
 	["#", "c", "c", "c", "c", "c", "c", "c", "c", "#"],
	["#", "c", "c", "c", "c", "c", "c", "c", "c", "#"],
	["#", "c", "c", "c", "c", "c", "c", "c", "c", "#"],
	["#", "c", "c", "b", "c", "c", "c", "c", "c", "#"],
	["#", "c", "c", "c", "c", "c", "c", "c", "c", "#"],
	["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]
 	
 	];
 	
function setup() {
 // bg = loadImage("image.jpg");
  createCanvas(fx, fy);
  posX = 90;
  posY = 200;
  
  noCursor();
}

function draw() {
 background (0);
	if(vidas > 0) {	
		//Gerar cenário
		for(j = 0; j < cenario.length; j++) {
			for(i = 0; i < cenario.length; i++) {
				if(cenario[i][j] == "#") {
					//image(img, j*tamBloco, i*tamBloco);
					fill(200,250,255);
					rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco);
				}
			}
		}
  }
   
  //função para o formato das estrelas  
  function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
    }
 
  textSize(14); // define o tamanho da fonte
  fill(255); 
  //text(contagem + " bolas já se passaram", 350, 80); // escreve na tela
 
  
  //movimentos da bola
	if ((keyIsDown(LEFT_ARROW)) && (vidas!=0)){
		posX-=4;
		pontos++;
		}
	if ((keyIsDown(RIGHT_ARROW)) && (vidas!=0)){
		posX+=4;
		pontos++;
		
    }
	if ((keyIsDown(UP_ARROW)) && (vidas!=0)){
		posY-=4;
	}

	if ((keyIsDown(DOWN_ARROW)) && (vidas!=0)){
		posY+=4;
	}

 //limites da bola dentro do cenario
    if ( posX > 800) {
			posX = 800;   
		}
    if ( posY > 590) {
			posY = 590;   
		}
		if ( posX < 90 ) {
			posX = 90;   
		}
		if ( posY < 90 ) {
			posY = 90;  
		}

ellipse(posX, posY, 40, 40);//bola 
  
 	
	//Movimtos quadrado 1
	if (y1 < 900){
		y1= y1 + random(0,13);
			}
	else{
		y1 = 0;
	} 
	star(x1, y1, 20, 10, 5);; //quadrado1
	
	//Movimentos quadrado 2
	if (y2 < 900){
		y2= y2 + random(0,14);
			}
	else{
		y2 = 0;
	} 
	star(x2, y2, 20, 10, 5); //quadrado2
	
	//Movimentos quadrado 3
	if (y3 < 900){
		y3= y3 + random(0,15);
			}
	else{
		y3 = 0;
	} 
	star(x3, y3, 20, 10, 5); //quadrado3
	
	//Movimentos quadrado 4
	if (y4 < 900){
		y4= y4 + random(0,16);
			}
	else{
		y4 = 0;
	} 
	star(x4, y4, 20, 10, 5); //quadrado4
		 
	//Movimentos quadrado 5
	if (y5 < 900){
		y5= y5 + random(0,17);
			}
	else{
		y5 = 0;
	} 
	star(x5, y5, 20, 10, 5); //quadrado5
	
			
	if(dist(posX,posY,x1,y1) <= 35 && dist(posX,posY,x1,y1) >= 31) {
		//alert("Nave destruída!");
		vidas--;
	   	}
	if(dist(posX,posY,x2,y2) <= 35 && dist(posX,posY,x2,y2) >= 31) {
		//alert("Nave destrúda!");
		vidas--;
	 }
	if(dist(posX,posY,x3,y3) <= 35 && dist(posX,posY,x3,y3) >= 31) {
		//alert("Nave destruída!");
		vidas--;
	   	}
	  	
	if(dist(posX,posY,x4,y4) <= 35 && dist(posX,posY,x4,y4) >= 31) {
		//alert("Nave destruída!");
		vidas--;
	   	}
	
	if(dist(posX,posY,x5,y5) <= 35 && dist(posX,posY,x5,y5) >= 31) {
		//alert("Nave destruída!");
		vidas--;
	}
	if (vidas == 0){
			y1=-30;
			y2=-30;
			y3=-30;
			y4=-30;
			y5=-30;
			vidas=0;
	   	}
	
	textSize(60);
	text("Vidas: " + vidas, 50, 50);
	text("Pontos: "+pontos, 500, 50);
	
	if (vidas <= 0){
		text("Game Over", 340, 300);
	    
	
	}
	
}
