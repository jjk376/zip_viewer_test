import EventEmitter from 'events';
class FileListModel extends EventEmitter {
	constructor(){
		super();
		this._fileList = {}; //json Dictionary type
		this._dispatchedFiles = []; //files 타입 배열들
	}
	_pushFiles(json){
		console.dir(json); //
		let fileType = json.fileName.slice(json.fileName.lastIndexOf(".") + 1); //확장자 구하기.
		json.fileType = fileType.toLowerCase();
		json.isZip = (json.fileName.lastIndexOf(".zip") != -1); // .zip 외의 확장자는 어떻게 처리하지??? 
		this._fileList[json.fileId] = json;
		this.emit('change:add', json);
	}
	_pushDispatchedQueue(json){
		this._dispatchedFiles.push(json);
		this.emit('change:dispatched',json);
	}
	_notifyProgress(){
		this.emit('change:')
	}
	_makeResponseJSON(response){
		let resultResponse;
		if (typeof response  === 'string')
			resultResponse = JSON.parse(response);
		else resultResponse = response;
		return resultResponse;
	}
	apiFileList() {
		let This = this;
		$.ajax({
			url : "/api/files",
			type : "GET",
			success : function(results) {
				let resultFileList = This._makeResponseJSON(results);
				resultFileList = resultFileList.items;
				resultFileList.forEach(function(resultFile){
					This._pushFiles(resultFile);
				})
			},
			xhr : function() {
				var xhr = $.ajaxSettings.xhr();
				return xhr;
			}
		});
	}

	dispatchFiles(files) {
		console.log(this._dispatchedFiles.length);
		
		let isUploadingKnow = (this._dispatchedFiles.length != 0);
		for (let i=0; i<files.length; i++) {
			this._pushDispatchedQueue(files[i]);
		}
		
		if (!isUploadingKnow) {
			console.log("start to insert file")
			this.apiFileInsert();
		}
	}

	apiFileInsert() {
		if(this._dispatchedFiles.length === 0) throw "NO MORE FILES TO UPLOAD";

		let This = this;
		let formData = new FormData();
		formData.append("file", this._dispatchedFiles[0]);
		$.ajax({
			url : "/api/files",
			data : formData,
			contentType : false,
			processData : false,
			type : "POST",
			mimeType : "multipart/form-data",
			success : function(results) {
				let result = This._makeResponseJSON(results);
				This._pushFiles(result);
			},
			error : function(){
				console.log('ERROR');//
			},
			xhr : function() {
				var xhr = $.ajaxSettings.xhr();
				xhr.upload.onprogress = function(event) {
					This.emit("progres:uploading");
				}
				xhr.upload.onload =function(event){
					console.log('DONE!');
				}
				return xhr;
			}
		}).always(function() {
			This._dispatchedFiles.shift();
			This.apiFileInsert();
		});
	}
}
export default FileListModel;
