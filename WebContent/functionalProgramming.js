/**
 * 함수형 프로그래밍은 함수의 응용을 중시하고 부수 효과를 없애는 것이 목표에 가깝다. 
 * 함수형 프로그래밍이 부수 효과를 이토록 미워하는 이유는 다음 두 가지를 위해서다.
 *  하나는 오류를 줄이기 위해서고, 또 하나는 조합성 혹은 모듈화 수준을 높이기 위해서다. 
 *  오류가 없는 것은 좋은 프로그램의 가장 중요한 척도이고, 높은 모듈화 수준은 성공적인 프로그래밍의 핵심 요소다.
 *  높은 모듈화 수준은 생산성을 높이고, 오류 없는 함수들의 조합은 프로그램 전체의 안정성을 올려준다. 
 *  함수형 프로그래밍은 성공적인 프로그래밍을 위해 부수 효과를 미워하고 조합성을 강조하는 프로그래밍 패러다임이다.
 */

/**
 * 고차 함수
 * 특정한 행위를 함수 값으로 전달.
 * (함수 == )알고리즘을 전달 받는 것.
 * 다른 함수를 대상으로 동작하는 함수 == 고차 함수
 */
function forEach(array, action){
	for(var i=0; i<array.length; i++) {
		action(array[i]);
	}
}

//forEach(catsArray,print); 


function negate(func) {
	return function(x) {
		return !func(x)
	}
}

var isNotNaN = negate(isNaN);
//print(isNotNaN);
/**
 * negate에서 반환한 함수에서는 자신이 받은 인자를 원본 함수인 func에 전달한 다음 결과를 부정한다.
 * 하지만 부정하고 싶은 함수에서 인자를 한 개 이상 받는다면 어떻게 될까?
 * arguments 가상 배열을 이용하면 함수에 전달된 모든 인자에 접근할 수 있지만 인자의 갯수를 모를 때는 함수를 어떻게 호출해야 할까?
 * 함수에서는 이런 상화에 사용하는 apply 메소드가 있다. 이 메소드는 인자를 두개 받는다. 첫 번째 인자의 역할은 6장에서 다루겠지만, 지금 당장은 null을 전달한다.
 * 두 번째 인자는 함수에 적용해야 할 인자가 담긴 배열이다. 
 */
function negate2(func) {
	return function() {
		return !func.apply(null, arguments);
	}
}
isNotNaN = negate2(isNaN);
//print(isNotNaN);