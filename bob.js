class bob
{
	constructor(x,y,d)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.d=d
		
		this.body=Bodies.circle(this.x, this.y,(this.d)/2 , options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push();
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER);
			fill(255,0,255);
			ellipse(0,0,this.d);
			pop();
			
	}

}

