class Block{
    constructor(x,y,width,height){
        var options = {
            'isStatic':true,
           'restitution':0.1,
           'friction':0.5,
           'density': 1.2
        }
        this.body = Bodies.rectangle(x,y,20,height,options)
        this.width = width;
        this.height = height;

        World.add(world,this.body);
     }

    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill('yellow');
        strokeWeight(5);
        stroke('darkblue');
        rect(0,0,this.width,this.height);
        pop();
        
      }
}