﻿// dependencies: Vector2D
function Box(width,height,color,mass){
	if(typeof(width)==='undefined') width = 20;
	if(typeof(height)==='undefined') height = 20;
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
	this.angVelo = 0;	
}		

Box.prototype = {
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
	draw: function (context) {  
		context.fillStyle = this.color;
		context.fillRect(this.x,this.y,this.width,this.height);
	}
};
