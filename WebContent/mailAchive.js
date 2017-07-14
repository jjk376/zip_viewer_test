//문자열 함수

var stringType = "test : this is a string type";

//print(typeof stringType);
//print(stringType.toUpperCase());
//print(stringType.split(" "));
//print(stringType.indexOf(":")); // :의 최초 위치를 알 수 있다. 
//print(stringType.slice(stringType.indexOf(":"))); // slice 다음 매개변수 하나면  지정한 위치에서 끝까지.
//print(stringType.slice(0,3));
//print(stringType);

var saying = [];
saying.push("마른");
saying.push("하늘에");
saying.push("날벼락");
saying.push("노잼");
//print(saying.join(" "));
saying.pop();
//print(saying.join(" "));

//var ARCHIVE = {0:"조카에게, .... (mail content)...", 1: "(mail contents....)", 2:"(mail #03)"};
//for (var current = 0 ; current in ARCHIVE ; current++) {
//	print("이메일들... : ","#"+current, ARCHIVE[current]);
//};

var cats = {"금강": true, "불괴":false, "시계":true};
delete cats["불괴"];
//for (var cat in cats)
//	print(cat);

var catsArray = ["금강","불괴","시계"]; // == {0:"금강", 1:"불괴",2:"시계"}
delete catsArray[1];
print(catsArray)
print(catsArray[1]); // undefined
for (var cat = 0 ; cat in catsArray; cat++) {
	print(cat); // 1은 catsArray 에 속하지 않기 때문에 그만둠.
//	print(catsArray[cat]);
}
//여기엔 분명히 들어 있을 length나 push, join 이 아닌  0,1,2 만 나타날 것이다. 
// 객체의 일부 프로퍼티는 in 반복문으로부터 감춰져 있는 듯 한데, 이를 공식적으로 열거할 수 있지 않다 라고 한다.
// 여기엔 그럴만한 이유가 있다. 즉, 모든 객체에는 객체를 일종의 적절한 문자열로 변환하는 메소드가 있는데, 객체에 저장된 고양이를 찾거나 할 때는 그런 메소드를 보고 싶지 않을 것이다. 
// 프로그램에서 객체에 추가한 프로퍼티는 모두 확인 가능하다. 
// 그런 프로퍼티를 감출 방법은 아쉽게도 없지만 객체에 추가한 프로퍼티를 for/in 반복문에서 보이게 하지 않으면서 객체에 메소드를 추가하는 것이 유용한 경우가 있다.

