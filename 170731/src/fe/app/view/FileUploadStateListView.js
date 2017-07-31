/**
 * 
 */
class FileUploadStateListView {
	constructor(domId){
		this._dom = jQuery(domId);
	}
	rendering(json) {
		let li = $("<li></li>");
		let div = $("<div></div>").attr("class","row");
		let innerDiv10 = $("<div></div>").attr("class","col-xs-10").text(json.name);
		let innerDiv2 = $("<div></div>").attr("class","col-xs-2");
		let iconSpan = $("<span></span>").attr("class","glyphicon glyphicon-hourglass").attr("aira-hidden","true");
		innerDiv2.append(iconSpan);
		div.append(innerDiv10).append(innerDiv2);
		li.append(div);
		this._dom.append(li);
	}
	progressRendering(id, progress) {
		let li = this._dom.find("#"+id);
		li.text(progress);
	}
}
export default FileUploadStateListView;