/**
 * class를 쓰지 않으면 상속이 너무 어렵다. 코드가 아래와 같이 지저분 해짐.
 * 
 */

class Vehicle {
	constructor(name, speed){
		this.name = name;
		this.speed = speed;
	}
	drive(){
		console.log(this.name + ' runs at ' + this.speed)
	}
}

class Sedan extends Vehicle{
	constructor(name, speed, maxSpeed){
		super(name,speed);
		this.maxSpeed = maxSpeed;
	}
	boost(){
		console.log(this.name + ' boosts its speed at ' + this.maxSpeed);
	}
}
/**
 * ECMA6 class는 위와 같이 지원함.
 * 위의 코드는 ECMA5에서 아래와 같다. 
 */
/*
function Vehicle(name, speed) {
	this.name = name;
	this.speed = speed;
}
Vehicle.prototype.drive = function() {
	console.log(this.name + ' runs at ' + this.speed)
};
function Sedan(name, speed, maxSpeed) {
	Vehicle.apply(this, arguments)
	this.maxSpeed = maxSpeed;
}
Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.boost = function() {
	console.log(this.name + ' boosts its speed at ' + this.maxSpeed);
};
*/
module.exports = {
		Vehicle: Vehicle,
		Sedan : Sedan
};

/**
 * ?? module exports는 class를 prototype을 하는지 
 * 아니면 클래스를 인스턴스한 것(new...)을 export 하는지가 궁금합니다. 
 */
 
