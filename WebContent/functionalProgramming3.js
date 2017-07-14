/**
 * 프로그램을 더욱 간결하게 만드는 함수형 비법.
 */
/**
 * 연산자 함수
 * 
 * 고차 함수를 사용할 때 자바 스크립트에서는 연산자가 함수가 아니라서 종종 번거로울 대가 있다.
 * ex) 더하기 함수를 add라고 정의 해줘야 함.
 * 이를 피하는 한 방법은 다음과 같은 연산 객체를 만드는 것이다.
 * */
var op = {
		"+": function(a,b){return a+b;},
		"==": function(a,b){return a==b;},
		"===" : function(a,b){return a===b;},
		"!": function(a){return !a;},
		"*": function(a,b){return a*b;}
		/*기타 등등*/
}

print(reduce(op["+"],0,[1,2,3,4,5]));
/**
 * 부분 적용
 *
 * 그런데 연산자의 인자 중 하나가 이미 지정된 함수가 필요하다면 어떨까?
 * 예를 들어 인자를 0과 비교하거나 인자에 1을 더하는 함수가 필요하다고 해보자. 그렇다면 여전히 새로운 함수를 작성해야 할 것이다.
 *  그런 경우에는 부분 적용이 유용하다.
 *  여기서는 함수 x와 하나 이상으ㅣ인자를 취한 후 원본 인자와 새로 전달된 인자로 X를 호출하는 함수를 새로 작성하고 싶다고 가정해 보자.
 */

function partial(func) {
	var knownArgs = arguments; // arguments는 가상 배열이다. 
	
	for(var i = 0 ; i < arguments.length; i++) {
		print("argue : ", arguments[i]);
	}
//	print(knownArgs.length)
	// knownArgs가 필요한 이유는 내부 함수 안에서 arguments변수가 내부 함수의 인자를 가리킬 뿐이지 partial의 인자를 가리키지 않기 때문이다.
	return function() { 
		var realArgs = [];
		for (var i = 1; i < knownArgs.length; i++)
			realArgs.push(knownArgs[i]); // func으로 전달받은 매개 변수 중 0번(함수) 이후의 매개변수를 저장.
	//	print(realArgs);
		for (var i = 0; i < knownArgs.length; i++){  // knwonArgs.slice(1).concat(arguments)
			realArgs.push(arguments[i]);
		}
	
		
		return func.apply(null, realArgs); 
	} 
}


print(map(partial(op["+"],1),[0,1,2,3,4,5,6,77]));
// partial로 전달된 매개 변수의 길이는 2, 