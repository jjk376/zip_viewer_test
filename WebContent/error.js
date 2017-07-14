/**
 * 프로그램에서 마주칠 수 있는 문제가 발생하는 상황은 
 * 1. 프로그래머의 실수 / 2. 런타임 
 * 1. 은 누군가가 필요한 인자를 함수에 전달하지 않음. (undefined가 전달됨)
 * 2. 프로그램에서 사용자에게 이름을 입력해 달라 했는데 빈 문자열을 돌려받음 -> 프로그래머가 예방 할수 없음.
 */

/**
 * 프로그래머의 신수를 처리하는 전략은 보통 가능한 한 프로그램이 빨리 실패하게 만드는 것인데, 
 * 가급적 뭐가 잘못됐는지 분명히 알 수 있게 처리한다.
 * 
 * 인자를 잊어버려도 아무렇지 않고 단지 undefined값만  전달될뿐이며, 그런 다음 어떤 수치 계산에 이 인자를 사용해도 NaN 이 될뿐임.
 * 
 * 오류가 나기 쉬운 상황을 지적할 때 누군가는 명시적으로 입력의 유효성을 검사하는 코드를 작성해 입력한 내용이 유효하지 않으면 프로그램을 날려버릴 수 있다.
 * -> 다만 코드의 길이가 너무 커질 가능성 높아짐.
 * -> 개인적인 문제도 있다.
 * 
 */

/**
 * 런타임 오류는 프로그램에서 어쨋든 입력을 읽어 들이거나 다른 시스템에 의존한다면 
 * 입력이 유효하지 않거나 다른 시스템이 손상되거나 사용 불가능한 상태에 있을 가능성이 있다.
 */

function between (string, start, end) {
	var startAt = string.indexOf(start) + start.length;
	if (startAt == -1) throw "start index를 찾을 수 없습니다."; //error처리
	var endAt = string.indexOf(end, startAt); //  startAt  이후로 나온 부분. 
	if (endAt == -1) throw "end index를 찾을 수 없습니다."; // error처리
	return string.slice(startAt, endAt);
}

print(between("루이 '팝' 암스트롱", "'","'"));
try{
	between("루이 '팝  암스트롱", "'","'");
} catch (e){
	print("error : ", e)
}

/** 
 * 일반적으로 오류가 발생할 가능성이 있으면 호출하는 쪽에서는 명시적으로 오류를 검사해야 하며, 
 * 특별한 값을 반환하는 것은 오류를 나타내는데 안성 맞춤이다.
 * 하지만 그렇게 하는 데는 몇가지 단점이 있다.
 * 첫째, 함수가 모든 가능한 종류의 값을 반환할 수 있다면?
 */
/**
 * 일반적인 예외처리 매커니즘
 *  : 현재 함수를 벗어날 뿐만 아니라 해당 함수를 호출한 쪽에서도 벗어나 현재 코드 실행을 시작한 최상위 수준의 호출부로 이동.
 *  -> 스택풀기
 *  항상 스택의 최상단(가장 먼저 push된 존재) 로 돌아가면 의미가 없기 때문에 원하는 분기점으로 갈 수 있는 try-catch문이 나옴
 */
function lastElement(array) {
	if(array.length > 0)
		return array[array.length -1];
	else throw "빈 배열 입니다."
}  // array 에  [1,2,undefined]가 전달됨. 배열은 마지막 요소가 있지만 마지막 요소가 없는 것 처럼 보임.
function lastElementPlusTen(array) {
	return lastElement(array) + 10;
}

try{ // lastElementPlusTen 함수에서는 lastElement함수가 잘못될 가능성을 완전히 무시해줌.
	// 오류 처리 코드는 오류가 발생하고 오류를 처리하는 지점에 필요하며, 그 사이에 있는 함수는 오류 처리를 신경 안씀.
	print(lastElementPlusTen([]));
} catch (error) {
	print("error :", error);
} finally {

}
var currentThing
function processThing(thing){
	var prevThing = currentThing
	currentThing = thing;
	try{
		// 어떠한 복잡한 일들.
	} finally {
		currentThing = prevThing;
		// 어떤 일이 일어나든 try블록에 있는 코드를 실행한 후 이 코드를 실행한다. 
	}
}

/**
 * 프로그램에 존재하는 대다수의 오류는 자바 스크립트 환경에서 예외가 발생하게 만든다. 
 * error 객체에는 message프로퍼티가 담겨 있다. 
 */

var InvalidInputError = new Error("유효하지 않은 숫자 입력");
function inputNumber() {
	var input = Number(prompt("숫자를 입력바람."));
	if (isNaN(input)) throw InvalidInputError;
	return input;
}

//for(;;){
//	try{
//		alert(inputNumber() * 5);
//		break;
//	} catch(e) {
//		if ( e!= InvalidInputError) {
//			throw e;
//		}
//		alert("숫자로 입력해주세요.");
//	}
//}

/**
 * 자동화된 테스트란 바로 프로그램을 테스트 하는 프로그램이다.
 * between 함수를 테스트 하려면 다음과 같은 코드를 작성할 수 있다.
 */
function between2(string, start, end){
	var startAt = string.indexOf(start) + start.length;
	if (startAt == -1) return undefined;
	var endAt = string.indexOf(end, startAt); //  startAt  이후로 나온 부분. 
	if (endAt == -1) return undefined;
	return string.slice(startAt, endAt);
}
function testBetween2() {
	function assert(name, testSample) {
		if(!testSample) throw "Assertion Failed : " + name;
	}
	assert("똑같은 구분자", between2("a |b| c", "|", "|") == "b");
	assert("전체 문자열", between2("[[n]]", "[[", "]]") == "n");
	assert("순서가 거꾸로임", between2("]x[", "[", "]") == undefined);
	assert("종결 문자 누락", between2("-->d", "-->", "<--") == undefined);
}

testBetween2();