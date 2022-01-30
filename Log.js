class Log extends BaseClass{

    //Propriedades
    constructor(x,y,width,angle){

        super(x,y,width,20);

        //Definir ângulo do objeto
        Body.setAngle(this.body,angle);
        
        //Carregar imagem
        this.image = loadImage("sprites/wood2.png");

        
    }

}