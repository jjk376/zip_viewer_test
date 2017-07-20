class Vehicle{
	constructor(name, speed){
		this._name = name;
		this._speed = speed;
	}
	static staticMethod(){
		return "I'm static";
	}
	drive(){
		console.log(this._name + ' runs at ' + this._speed)
	}
} 
export default Vehicle;