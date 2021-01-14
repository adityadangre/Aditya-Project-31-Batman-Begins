class Man{
    constructor(x,y){
        var options = {
            isStatic:true,
            friction: 0.1,
            restitution:0.1           
        }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("black");
        ellipse(pos.x,pos.y+80,180,250);
        pop();
    }
}

