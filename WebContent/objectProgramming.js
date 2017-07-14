
/**
 * 진정한 의미의 객체 지향은

- 추상화
- 캡슐화
- 상속
- 다형성

을 지원해야 한다.


클래스는 다음과 같이 두가지 문법과 조합되어 많이 사용된다.

클래스 + 인터페이스
클래스 + 추상클래스
클래스  + 추상클래스 + 인터페이스

자바 스크립트의 경우 
interface, 추상 클래스 문법을 지원하지 않는다. -> 있다는 가정하에 코딩을 하는 방법 밖에 없다.

 */


var MyClass = function(){
	this.a = 'public'; // public 프로퍼티
	this,_b = 'private'; // private 프로퍼티
}
MyClass.prototype.methodName = function(){
	console.log("methodName public 메서드");
} 
MyClass.prototype._methodName = function(){
	console.log("_mothodName private, protected 메서드");
}  // private, protected 메서드

// 처럼 쓰이고 실제로 컴파일 오류를 내지는 않지만 무언의 약속으로 이렇게 쓰임.

// final 속성 추가하기.

Object.defineProperties(obj, {
	a : {
		value : 5,
		writable : false, // 속성값을 변경할 수 있는지.
		enumerable : true, // for in 반복문 안에서 사용할 수 있는지.
	},
	b : {
		get : function() {
			return 'zero';
		},
		set : function(value) {
			console.log(this, value);
			this.a = value;
		},
		enumerable : false,
		configurable : false, // 속성의 설명을 바꿀 수 있는지. -> 뭐하는거지
	},
});
/**
 * writable은 속성 값을 바꾸는 것을 막지만 
 * 만약 속성의 값이 객체인 경우에는 그 객체 안의 속성을 바꾸는 것은 막지 못한다.
 *  바꾸는 것을 전체적으로 막기 위해서 Object.freeze 메소드가 있다.
 *  
*/