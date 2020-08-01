class plinko{
    constructor(x,y){
        var plinko_option={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,plinko_option);
        this.radius=10;
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("white")
        ellipse( 0, 0, this.radius, this.radius);
        pop();
    }

}