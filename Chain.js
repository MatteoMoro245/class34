class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250,
        }
        this.pointB = pointB,
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
attach(){
    this.chain.bodyA=body;
};
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("red")
            strokeWeight(5);
            line(pointB.x, pointB.y, pointA.x, pointA.y);   
        }
    }
}