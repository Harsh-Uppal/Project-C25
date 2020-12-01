class ground{
    constructor(x,y){
        this.object = Bodies.rectangle(x,y,1000,3,{isStatic:true});
        World.add(world,this.object);
        this.image = loadImage("black.bmp");
    }

    display(){
        push();
        translate(this.object.position.x, this.object.position.y);
        rotate(this.object.angle);
        imageMode(CENTER);
        image(this.image,this.object.position.x,this.object.position.y,1000,3);
        pop();
    }
}