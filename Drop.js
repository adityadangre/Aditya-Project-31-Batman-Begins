class Drop{
    constructor(x,y){
        var options = {
            friction: 0.1,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,8,options)
        this.radius = 8;
        World.add(world, this.rain);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,720), y:random(0,720)})
        }
    }

    display(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}
