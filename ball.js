class ball{
    constructor(x,y,scale,options){
        this.scale = scale;
        this.ballObject = Bodies.circle(x,y,scale*2,options);
        World.add(world, this.ballObject);

        this.image = loadImage("paper.png");
    }

    display(){
        push();
        translate(this.ballObject.position.x, this.ballObject.position.y);
        rotate(this.ballObject.angle);
        image(this.image,this.ballObject.position.x,this.ballObject.position.y,this.scale*3,this.scale*3);
        pop();
    }
}