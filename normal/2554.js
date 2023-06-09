﻿function Forces3D(){
}

// STATIC METHODS
Forces3D.zeroForce = function() {
	return (new Vector3D(0,0,0));
}
Forces3D.constantGravity = function(m,g){
	return new Vector3D(0,m*g,0);
}
Forces3D.gravity = function(G,m1,m2,r){
	return r.multiply(-G*m1*m2/(r.lengthSquared()*r.length()));
}
Forces3D.gravityModified = function(G,m1,m2,r,eps){
	return r.multiply(-G*m1*m2/((r.lengthSquared()+eps*eps)*r.length()));
}
Forces3D.electric = function(k,q1,q2,r){
	return r.multiply(k*q1*q2/(r.lengthSquared()*r.length()));
}
Forces3D.forceField = function(q,E) {
	return E.multiply(q);
}
Forces3D.lorentz = function(q,E,B,vel) {
	return E.multiply(q).add(vel.perp(q*B*vel.length()));
}		
Forces3D.central = function(k,n,r) {
	return r.multiply(k*Math.pow(r.length(),n-1));
}
Forces3D.linearDrag = function(k,vel){
	var force;
	var velMag = vel.length();
	if (velMag > 0) {
		force = vel.multiply(-k);
	}else {
		force = new Vector3D(0,0,0);
	}
	return force;
}
Forces3D.drag = function(k,vel) {
	var force;
	var velMag = vel.length();
	if (velMag > 0) {
		force = vel.multiply(-k*velMag);
	}
	else {
		force = new Vector3D(0,0,0);
	}
	return force;			
}
Forces3D.lift = function(k,vel) {
	var force;
	var velMag = vel.length();
	if (velMag > 0) {
		//force = vel.perp(k*velMag);
		force = new Vector3D(0,-k*vel.z*vel.z,0);
	}
	else {
		force = new Vector3D(0,0,0);
	}
	return force;			
}			
Forces3D.upthrust = function(rho,V,g) {
	return new Vector3D(0,-rho*V*g,0);
}		
Forces3D.spring = function(k,r){
	return r.multiply(-k);
}		
Forces3D.damping = function(c,vel){
	var force;
	var velMag = vel.length();
	if (velMag>0) {
		force = vel.multiply(-c);
	}
	else {
		force = new Vector3D(0,0,0);
	}
	return force;
}		
Forces3D.add = function(arr){
		var forceSum = new Vector3D(0,0,0);
		for (var i=0; i<arr.length; i++){
		var force = arr[i];
		forceSum.incrementBy(force);
	}
	return forceSum;
}
