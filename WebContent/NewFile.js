
function print() {
	for (var i=0; i<arguments.length; i++)
		document.writeln(arguments[i] + " ");
	document.writeln("<br/>");
}
var v;

print(v==null); // 자동 형변환 발생
print(v===null); // 자동 형변환 안함.

function findSequence(goal) {
	function find(start, history) {
		if(start == goal) {
			return history;
		} else if (start > goal){
			return null;
		}
		else return find(start + 5, " ("+history+" + 5) ") || find(start*3 ," ("+history+"*3)");
	}
	return find(1,"1")
}

print("asdf", "1111", "2222")