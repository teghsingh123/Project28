class Mango{
    constructor(x,y,r){
        var ballOptions = {
           isStatic: true,
           restitution: 0.0, 
           friction: 1
        }
        
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("mango.png");
    this.body = Bodies.circle(this.x,this.y,this.r,ballOptions);
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        fill("pink");
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop()
    }
}