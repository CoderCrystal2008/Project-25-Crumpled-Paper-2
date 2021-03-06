class Paper {
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'density':1.2,
            'friction':1
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;

        World.add(world,this.body);

        //assigns image
        this.image = loadImage("images/paper.png");
    
        
        
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        fill("purple");
        stroke(255);
        strokeWeight(2);
        ImageMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}