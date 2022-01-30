//Crir Variáveis
var mecanismo, mundo;
var caixa1,caixa2, caixa3, caixa4, caixa5;
var solo, angryBird;
var porco1, porco2;
var tronco1, tronco2,tronco3,tronco4;
var  imgPanoDeFundo;
var plataforma;

//Criar constantes
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  imgPanoDeFundo = loadImage("sprites/bg.png");
}

function setup() {
  //Criar área de jogo
  createCanvas(1200,400)

  //Criar mecanismo de física e mundo
  mecanismo = Engine.create();
  mundo = mecanismo.world;

  //Criar Solo
  plataforma = new Ground(150, 295,300,170);
  solo = new Ground(width/2,390,width, 20);

  //Criar pássaro Angry Bird
  angryBird = new Bird(100,100);

  //Nível 1 Caixas e POrco
  caixa1 = new Box(800,355,50,50);
  caixa2 = new Box(1000,355,50,50);
  porco1 = new Pig(900,355);

  //Nível 2 Tronco
  tronco1 = new Log(900,320,250,0);

  //Nível 3 Caixas e Porcos
  caixa3 = new Box(800,285,50,50);
  caixa4 = new Box(1000,285,50,50);
  porco2 = new Pig(900,285);

  //Nível 4 Tronco
  tronco2 = new Log(900,250,250,0);

  //Nível 4 caixa e troncos
  caixa5 = new Box(900,215,50,50);  
  tronco3 = new Log(860,210,95,-PI/7);
  tronco4 = new Log(940,210,95,PI/7);
}

function draw() {
  //Limpar a tela
  background(imgPanoDeFundo);

  //Atualizar o mecanismo de física
  Engine.update(mecanismo);
 
  // Mostrar o solo na tela
  plataforma.display();
  solo.display();

  //Mostrar Angry Bird na tela
  angryBird.display();

  //Mostrar nível 1 - Caixas e porco
  caixa1.display();
  caixa2.display();
  porco1.display();

  //Mostrar nível 2 - Tronco
  tronco1.display();
  
  //Mostrar nível 3 - Caixas e Porco
  caixa3.display();
  caixa4.display();
  porco2.display();

  //Mostrar nível 4 - troncos
  tronco2.display();

  //Mostrar nível 5 - Caixa e troncos
  caixa5.display();  
  tronco3.display();
  tronco4.display();

  push();
  fill("white");
  text("Posição: ("+ mouseX + "," + mouseY+")",  10, 20);
  pop();

}