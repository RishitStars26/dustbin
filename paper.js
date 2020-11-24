class Paper{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = ellipse(x,y,20,20,options)
        this.width = 20
        this.height = 20
        World.add(world, this.body);
    
    }
    display(){
    var pos =this.body.position;
    ellipseMode(CENTER)
    ellipse(0,0,this.width,this.height)
    }
}
    
