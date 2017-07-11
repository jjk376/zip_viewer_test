var AJAXDONE = true;
var draggedFilesValue = function(event) {
	event.preventDefault();
	console.log("fileupload start");
	// 여기서 ajax가 실행중인 것들이 있으면 업로드 중인 파일이 있다고 알려주고
	// 실행 종료 시키기. -> throw error 해주던지 해줘야 한다. 
	if(AJAXDONE == false) {
		alert("upload 중인 작업이 있습니다."); 
		return false;
	}
	AJAXDONE = false;
	console.log(event);
	var draggedFiles = event.originalEvent.dataTransfer.files;
	// Jquery에서는 event.originalEvent.dataTransfer. .... 형태로 작성해야 한다! 
	// Javascript 형태에서는 evet.dataTransfer.files 형태로 작성해야함!!! 
	uploadAlertOn();
	uploadFiles(draggedFiles, 0);
}

function uploadAlertOn(){
	console.log("beforeunload");
	$(window).on("beforeunload", function(event){
		console.dir(event);
	//	event.preventDefault();
		return "file upload 중입니다. upload 작업을 중단 하시겠습니까?"; 
	});
}
function uploadAlertOff(){ //여기 호출이 조금 고민. 언제 호출해줄까...
	console.log("beforeunload");
	$(window).off("beforeunload");
}
function uploadFiles(files, num) {
	if (num == files.length){ 
		AJAXDONE = true;
		return false
	};

	var formData = new FormData();
	formData.append("file", files[num]);
	formData.append("fileBlockNumber", "숫자!!");
	console.log(num);
	$.ajax({
		url : "uploadForm", //upload주소
		data : formData,
		contentType : false,
		processData : false,
		mimeType : "multipart/form-data",
		type : "POST",
//		async: false, //async false로 설정시 XMLHttpReques thread 객체가 
		beforeSend: function(){
			$("#uploadDialog").show();
			$("#uploadingFileName").html(files[num].name);
			$("#uploadedFileNumber").html(num+"/"+files.length);
		},
		success : function(result) {
			console.log(result);
			$(".fileList").append("<tr><td>" + result + "</td></tr>");
		},
		error : function(result) {
			console.log(result);
			console.dir(result);
		},
		xhr : function() { 
			// get the native XmlHttpRequest object
			var xhr = $.ajaxSettings.xhr();
			// set the onprogress event handler
			xhr.upload.onprogress = function(evt) {
				$("#porgressbar_done").css("width", evt.loaded/evt.total * 100 + "%");
				$("#porgressbar_done").html(parseInt(evt.loaded/evt.total * 100)+"%");
				console.log('progress', evt.loaded, "/", evt.total);
			};
			// set the onload event handler
			xhr.upload.onload = function() {
				console.log('DONE!');
				$("#uploadDialog").hide();
			};
			// return the customized object
			return xhr;
		}
	})
		.always(function() { // 한개의 요청 응답을 받은 다음. //error던..... 
		//	$("#uploadDialog").hide();
			uploadFiles(files, num + 1);
		});
}

var allowDrop = function(event) {
	event.preventDefault();
// 브라우저 표준 동작이 우선처리 되어 드롭 조작을 방해함.
// 기본 동작을 취할 수 있도록 함.
}