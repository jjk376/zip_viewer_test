
/**
 * < -> &lt; , > -> &gt , & -> &amp; 로 쓰기 귀찮았고,
 * < , > 를 모두 입력하자니 너무 피곤했다.
 * 책을 모두 일반 텍스트로 치고 단락을 분리하고 제목을 표시하는 규칙
 * - 단락 : 빈줄
 * - % : 제목
 * - * : 텍스트 강조
 * - 각주 : 괄호
 */

var paragraphs  = RECLISEFILE.split("\n\n");

function processParagraph(paragraph) {
	var header = 0;
	while(paragraph.charAt(header) == "%")
		header++;
	if (header > 0)
		return {type:"h"+header }
}