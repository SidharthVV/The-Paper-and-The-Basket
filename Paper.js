class Paper {
    constructor(x,y){
        var options = {
            'isStatic': false,
            'restitution' : 0.3,
            'fricton' : 0.5,
            'density' : 6.2
        }

        this.body = Bodies.circle(x,y,20,options);
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill('white');
        strokeWeight(5);
        ellipse(0,0,20,20);
        pop();
    }
}