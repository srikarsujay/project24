class Paper{
    constructor(x,y,r){
        var opitions={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,opitions)
        World.add(world,this.body)
    }
  display(){
      fill("white")
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
  }
}

