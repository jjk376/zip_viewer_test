/**
 * reduce 함수
 * 실제로 sum 함수는 대개 reduce 나 fold라는 알고리즘의 변종에 해당한다.
 */
//function forEach(array, action){
//	for(var i=0; i<array.length; i++) {
//		action(array[i]);
//	}
//}

function reduce(combine, base, array) { 
	
	forEach(array, function (element){ 
		
		base = combine(base,element);
	});
	return base;
}
/*
함수를 첫 번째 인자로 취하는 이유는 부분적으로 이렇게 하는 것이 관습이며,
 부분 적용(functinoalProgramming3.js 파일 참고.)을 쓸 수 있기 때문에 첫 번째 인자로 쓰인다. 
다시 말해 reduce를 호출할 때 reduce함수를 익명함수로 작성하는 것은 조금이상해 보인다는 의미다. 
이것은 이제 다른 인자들이 함수 다음에 나올 뿐만 아니라 일반 for블록과의 유사성이 완전히 사라지기 때문이다.
*/
function add(a,b){
	return a*b;
}

function sum(numbers){
	return reduce(add,0,numbers);
}

//reduce의 용도를 보여주는 또 하나의 예제로서 숫자로 구성된 배열을 인자로 취해
//해당 배열 내에 있는 0의 갯수를 반환하는 함수를 작성해보자.

function countZeros(array){
	function counter(total, element) {
		return total + (element === 0 ? 1:0);
	}
	return reduce(counter, 0, array);
}
// 여기서는 또 하나의 알고리즘 함수인 count를 정의해 그런 관점에서 countZeroes를 표현할 수도 있다. -> countZeros2
function count(test, array) {
	var counted = 0;
	forEach(array, function(element){
		if(test(element)) counted++;
	});
	return counted;
}

function countZeros2(array){
	function isZero(x) {return x===0;}
	return count(isZero, array);
}

function map(func, array) { // map은 매개 변수가 하나인 함수를 각 행마다 수행함.
	var result = [];
	forEach(array, function (element) {  // 배열 원소마다 element와 무언가를 한 연산 결과를 실행함.
		result.push(func(element))
	});
	return result;
}

print(map(Math.round, [0.01,2, 9.8, Math.PI]));
