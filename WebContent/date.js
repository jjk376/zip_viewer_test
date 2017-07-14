var wende1 = new Date(1989,1,1);
var wende2 = new Date(1989,1,1);

print(wende1 == wende2);
print(wende1.getTime() === wende2.getTime());

function extractDate(text) {
	function numberAt(start,length){
		return Number(text.slice(start, start+length));
	}
	return new Date(numberAt(8,4), numberAt(13,2)-1, numberAt(16,2))
}