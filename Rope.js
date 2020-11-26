class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointb:{x:this.offsetX,y:offsetY}
        }
        this.rope=Constraint.create(options);
       World.add(world,this.rope);
       
    }
    display(){
        var pointa=this.rope.bodyA.position;
        var pointb=this.rope.bodyB.position;
        strokeWeight(4);
     line(pointa.x,pointa.y,pointb.x,pointb.y);
    }
}