class Bird extends BaseClass{

    //Propriedades
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
    }

    display(){
        //Renomear nome da posição da caixa
        var position = this.body.position;

        //Fazer objeto se movimentar com o mouse
        position.x = mouseX;
        position.y = mouseY;
        super.display()

    }

}