import EventEmitter from 'events';
class ZipModel extends EventEmitter {
	constructor(fileId){
		super();
		this._fileId = fileId;
		// this._head;
		// this._root;
		this.apiZipFileLoad();
	}
	apiZipFileLoad() {
		let This = this;
//		let formData = FormData();
//		formData.append("fileId",this._fileId);
		$.ajax({
			url : "http://localhost:8080/api/files/"+This._fileId+"/zipfiles",
//			data : formData,
			type : "POST",
			success : function(results) {
			},
			xhr : function() {
			}
		});
	}

	apiZipFileList(fileId) {
		let This = this;
		let formData = new FormData();
		formData.append("zipfileParentId", null); //zipfilePatrentId
		$.ajax({
			url : "http://localhost:8080/api/files/"+fileId+"/zipfiles",
			type : "GET",
			success : function(result) {
			},
			error : function(){
			},
			xhr : function() {
			}
		}).always(function() {
		});
	}
}
export default FileListModel;
