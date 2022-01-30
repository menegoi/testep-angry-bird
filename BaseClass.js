class BaseClass{

    //Propriedades
    constructor(x,y,width,height){

        //Parâmetros adicionais para a caixa
        var options = {

            restitution:0.8,
            friction : 1.0,
            density: 1.0
        
        }

        //Criar o objeto caixa
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(mundo, this.body)
    }

    //Métodos
    display(){
        //Renomear nome da posição da caixa
        var position = this.body.position;
        var angle = this.body.angle;

        //Modificar os atributos
        //somente do elemento caixa e não do mundo inteiro
        push();

        //Modificar o ângulo e o translação
        translate(position.x,position.y);
        rotate(angle);

        //Criar retangulo para desenhar a caixa
        imageMode(CENTER);
        image(this.image,0, 0,this.width, this.height);

        //Finalizar o bloco com as modificação dos atributos da caixa
        pop();
      
    }
}