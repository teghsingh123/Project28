class Tree {
    constructor(x,y){
        var options = {
            isStatic: true
        }
    this.x = x;
    this.y = y;

        this.width = 450;
        this.height = 600;
        this.thickness = 10;
        this.image = loadImage("tree.png")
        this.body = Bodies.rectangle(this.x,this.y,450,600,options);
        World.add(world,this.body);
        }
        display(){
            var pos = this.body.position;
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height);
        }
    }