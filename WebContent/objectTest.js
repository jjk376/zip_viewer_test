
/**
 * 스코프는 함수를 선언할 때 생긴다. 
 * 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳에 있는 변수를 계속 참조하게 된다.
 * 
 */
var name = 'zero';
function log(){
	console.log(name); // 전역변수 name
}
function wrapper1(){
	name = 'nero'; // 전역 변수 name
	log();
}
function wrapper2(){
	var name = 'nero';	// 지역 변수  name
	log();
}
wrapper1();  // nero
wrapper2();  // zero

var Obj = function(){
	this.x = 'local'; // x는 접근이 가능해 진다.
	this.y = function(){
		console.log(this.x);
	}
}

var instance = new Obj();

instance.x = "chaged"; // 공개된다.
instance.y();


var Obj2 = function() {
	var x = 'local'; // x에 대한 접근을 막아버리고 싶다.
	function y() {
		console.log(x);
	}
	return {
		y : y
	};
}
var newScope = Obj2();
newScope.y();

var IIFE = (function() {
	var x = 'local';
	return {
		y : function() {
			console.log(x);
		}
	};
})();
//(function() {})(); 은 함수를 선언하자마자 바로 실행시키는 패턴.
