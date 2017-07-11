<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<% request.setCharacterEncoding("utf-8"); %>
<%@ page session="false" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<head>
	<title>Home</title>
	<script src="resources/jquery-3.2.1.js"></script>
<script>
    $(document).ready(function(){
            $("#dropZone").text("DROP HERE");
    });
    
    function draggedFilesValue(event){
        
        event.preventDefault();
     //   event.stopPropagation(); //얘랑 차이는 뭘까...
        var draggedFiles = event.dataTransfer.files;
        // Jquery에서는 originalEvent.dataTransfer. .... 형태로 작성해야 한다! 
//        uploadFile(draggedFiles);
        uploadFiles(draggedFiles, 0);
    }
    function uploadFiles(files, num){
    	if (num == files.length) return false;
    	
    	var formData = new FormData();
    	formData.encoding = "multipart/form-data; charset=utf-8;";
    	formData.append("file", files[num]);
    	console.log(num);
    	$.ajax({
    		url: "uploadForm", //upload주소
       	 	data: formData,
       	 	contentType:false,
       	 	processData: false,
       	    mimeType: "multipart/form-data",
            type: "POST",
            success: function(result) {
            	console.log(result);
         	   $(".fileList").append("<tr><td>"+result+"</td></tr>");
            },
    		error: function(result){
         	   console.log(result);
        	   console.dir(result);
           },xhr: function(){ //xhr좀 알아봐야할듯.
               // get the native XmlHttpRequest object
               var xhr = $.ajaxSettings.xhr() ;
               // set the onprogress event handler
               xhr.upload.onprogress = function(evt){ 
            	   $("#uploadDialog").html(evt.loaded+"/"+evt.total).show();
            //	   console.log(evt);
            	   console.log('progress', evt.loaded,"/",evt.total); 
            	   } ;
               // set the onload event handler
               xhr.upload.onload = function(){ 
            	   console.log('DONE!');
            	   $("#uploadDialog").hide();
           		} ;
               // return the customized object
               return xhr ;
           }
    	})
    	.always(function(){
    		uploadFiles(files,num+1);
    	});
    }


function allowDrop(event){
    event.preventDefault();
        // 브라우저 표준 동작이 우선처리 되어 드롭 조작을 방해함.
        // 기본 동작을 취할 수 있도록 함.
}
</script>
<style>
    .dropZone{
        width:100%;
        height:100%;
        border-style: dashed;
        border-width: 2px;
        text-align: center;
        color: gray;
    }
    table {
        width:100%;
    }
#dialogBackground {
	display:none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,.3);
    z-index: 10;
}
#uploadDialog {
	display:none;
	position: fixed;
	bottom: 0;
  	right: 0;
  	border-style: solid;
  	border-color: gray;
  	border-width: 1px;
	left: calc( 50% - 100px ); top: calc( 40% - 50px );
    width: 200px; height: 100px; 
    z-index: 11;
    padding: 10px;
    
}
</style>
</head>
<body>
<div id="uploadDialog">
</div>
<div id="dialogBackground"></div>

<div class="dropZone" ondrop="draggedFilesValue(event)" ondragover="allowDrop(event)">
    drag here
    <table class="fileList">
    </table>
    
  </div>
</body>
</html>
