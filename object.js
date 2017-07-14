/**
 * class를 쓰지 않으면 상속이 너무 어렵다. 코드가 몹시 지저분 킹
 * 
 */
class VehicleError extends Error {
	
}

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

class Sedan extends Vehicle{
	constructor(name, speed, maxSpeed){
		super(name,speed); 
		// extends 하는 것이 있으면 무조건 super 부터 호출 하도록 해야 한다.
		this._maxSpeed = maxSpeed;
	}
	static staticMethod(){ // 오버라이딩 테스트.
		return "I'm Sedan Static Method";
	}
	boost(){
		console.log(this._name + ' boosts its speed at ' + this._maxSpeed);
	}
}
class What extends null { /**
	 * such a class is not very useful 
	 * new Calling it leads to an error.
	 * -> ??!?
	 */
}
/**
 * 객체 속성을 비고개로 속일 수 잇는 방법들.
 * 1.  생성자 안에서 일반 변수를 사용하고, method를 constructor 안에 만들기.
 */


class Stack { 
	constructor(){
		const MAX = 31; 
		// const는 primitive type에 해당 하는 경우에는 Data 값을 바꿀 수 없다.
		const _buffer = [];
		// 그러나 Complex type의 경우 멤버 값 조작이 가능하다 (참조 주소)
		let _top = 0;
		// let은 블록({}) 내부의 범위에서만 허용됨. var는 (function + {}) 내부에서만 묶인 것과 다름.
		// var 보다 let을 쓰면 JAVA에서 사용하는 변수 범위처럼 생각할 수 있다.
		this.push = function(num) {
			if(_buffer.length == MAX) throw "Stack is Full"
			_buffer.push(num); 
		}
		this.pop = function() {
			return _buffer.pop();
		}

		// 이렇게 코딩할 경우 문제점은?
		// 클래스의 메서드는 생성자 안에서 정의되고, 인스턴스에 붙여진다
		// -> 함수가 prototype에 포함되어 있지 않기 때문에 instance 마다 함수에 해당 하는 부분이 메모리에 할당 됨.
		// 함수는 prototype마다 있어야 하는데, prototype에 없음.
		// 객체가 한번만 인스턴스로 생성되어 쓰이는 경우에만 쓰는게 좋음.
	}
}

/**
 * 객체 속성을 비고개로 속일 수 잇는 방법들.
 * 2. Symbol 사용. 
 */

/**
 * static property
 * 이부분좀 이해하고 싶다. 
 */
class SimpleDate {
	static setDefaultDate(year, month, day) {
		// A static property can be referred to without mentioning an instance
		// Instead, it's defined on the class
		SimpleDate._defaultDate = new SimpleDate(year, month, day);
	}

	constructor(year, month, day) {
		// If constructing without arguments,
		// then initialize "this" date by copying the static default date
		if (arguments.length === 0) {
			this._year = SimpleDate._defaultDate._year;
			this._month = SimpleDate._defaultDate._month;
			this._day = SimpleDate._defaultDate._day;

			return;
		}

		// Check that (year, month, day) is a valid date
		// ...

		// If it is, use it to initialize "this" date
		this._year = year;
		this._month = month;
		this._day = day;
	}

	addDays(nDays) {
		// Increase "this" date by n days
		// ...
	}

	getDay() {
		return this._day;
	}
}

/**
 * ?? module exports는 class를 prototype을 하는지 
 * 아니면 클래스를 인스턴스한 것(new...)을 export 하는지가 궁금합니다. 
 */