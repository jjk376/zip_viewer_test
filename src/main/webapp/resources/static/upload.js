
function draggedFilesValue(event) {
	event.preventDefault();
	// 여기서 ajax가 실행중인 것들이 있으면 업로드 중인 파일이 있다고 알려주고
	// 실행 종료 시키기. -> throw error 해주던지 해줘야 한다. 
	
	var draggedFiles = event.dataTransfer.files;
	// Jquery에서는 originalEvent.dataTransfer. .... 형태로 작성해야 한다! 
	//        uploadFile(draggedFiles);
	uploadAlertOn();
	uploadFiles(draggedFiles, 0);
	uploadAlertOff();
}
function uploadAlertOn(){
	$(window).on("beforeunload", function(event){
		console.dir(event);
	//	event.preventDefault();
		return "여기에 내가 필요한 메시지를 넣구 싶은데 인터넷 익스플로러만 먹혀 ㅠㅠ"; 
	});
}
function uploadAlertOff(){
	$(window).off("beforeunload");
}
function uploadFiles(files, num) {
	if (num == files.length) return false;

	var formData = new FormData();
	formData.append("file", files[num]);
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
				$("#porgressbar_done").html(parseInt(evt.loaded/evt.total) * 100+"%");
				console.log('progress', evt.loaded, "/", evt.total);
			};
			// set the onload event handler
			xhr.upload.onload = function() {
				console.log('DONE!');
			//	$("#uploadDialog").hide();
			};
			// return the customized object
			return xhr;
		}
	})
		.always(function() {
		//	$("#uploadDialog").hide();
			uploadFiles(files, num + 1);
		});
}


function allowDrop(event) {
	event.preventDefault();
// 브라우저 표준 동작이 우선처리 되어 드롭 조작을 방해함.
// 기본 동작을 취할 수 있도록 함.
}