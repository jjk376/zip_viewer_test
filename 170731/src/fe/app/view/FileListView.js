class FileListView {
	constructor(domId){
		this._dom = jQuery(domId);
	}
	getDomForEventBinding(){
		return this._dom;
	}
	rendering(json) {
		let innerDiv = jQuery("<div></div>").addClass("col-xs-2 file").data("fileId",json.fileId);
		let img = jQuery("<img class='media-object' style='height: 100px'></img>");
		img.attr("src", "/static/img/file-"+json.fileType+".png").attr("onerror","this.src='/static/img/file-common.png'");
		
		let name = jQuery("<h5></h5>").text(json.fileName).addClass("filename");
		innerDiv.append(img).append(name);
	
		let div;
		if (this._dom.children().length%6 === 0)
			div = jQuery("<div></div>").attr("class", "row");
		else
			div = this._dom.children().last();
		
		div.append(innerDiv);
		this._dom.append(div);
	}
	removeRendering() {
		// iteration 3
	}
}
export default FileListView;
