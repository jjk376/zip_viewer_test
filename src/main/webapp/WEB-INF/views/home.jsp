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
        
        uploadFile(draggedFiles);
        
    }

function uploadFile(files){
    for(var i=0; i<files.length; i++){
    	var formData = new FormData();
    //	formData.enctype = 'multipart/form-data; charset=utf-8;';
    //	formData.acceptCharset = 'utf-8';
    //	formData.accept-charset="utf-8";
    //위에 세개 해도 안먹힘.
    
    	formData.append("file", files[i]);
    	formData.encoding = "multipart/form-data; charset=utf-8;";
    	
    	console.dir(formData);
        $.ajax({url: "uploadForm", //upload주소
        	 data: formData,
        	 contentType:false,
        	 processData: false,
        	    mimeType: "multipart/form-data",
               type: "POST",
               success: function(result){
            	   console.log(result);
            	   $(".fileList").append("<tr><td>"+result+"</td></tr>");
               },
               error: function(result){
            	   console.log(result);
            	   console.dir(result);
               }
        })
    }
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
</style>
</head>
<body>
<form method="post" enctype="multipart/form-data" accept-charset="UTF-8" action="uploadForm">
	file to upload : <input type="file" name="file">
<input type="submit" value="submit">
</form>
<div class="dropZone" ondrop="draggedFilesValue(event)" ondragover="allowDrop(event)">
    drag here
    <table class="fileList">
    </table>
  </div>

</body>
</html>
