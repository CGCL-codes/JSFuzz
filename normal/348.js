﻿function Rocket(width,height,color,mass){
	if(typeof(width)==='undefined') width = 20;
	if(typeof(height)==='undefined') height = 40;	
	if(typeof(color)==='undefined') color = '#0000ff';
	if(typeof(mass)==='undefined') mass = 1;	
	this.width = width;
	this.height = height;
	this.color = color;
	this.mass = mass;
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;	
}
Rocket.prototype = {
	get pos2D (){
		return new Vector2D(this.x,this.y);			
	},
	set pos2D (pos){
		this.x = pos.x;
		this.y = pos.y;
	},
	get velo2D (){
		return new Vector2D(this.vx,this.vy);			
	},
	set velo2D (velo){
		this.vx = velo.x;
		this.vy = velo.y;
	},
	draw: function (context,firing) {  // firing is a Boolean		
		if (firing){
			var exhaust = new Triangle(this.x,this.y+0.5*this.height,this.width,this.height,'#ffff00',0.8);
			exhaust.draw(context);
		}		
		var capsule = new Triangle(this.x,this.y,this.width,this.height,this.color);
		capsule.draw(context);	
	}
};

		