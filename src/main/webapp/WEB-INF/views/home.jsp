<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<% request.setCharacterEncoding("utf-8"); %>
<%@ page session="false" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<head>
	<title>Home</title>
	<script src="resources/jquery-3.2.1.js"></script>
	<script src="resources/static/upload.js"></script>
	  <link rel="stylesheet" type="text/css" href="resources/static/upload.css">
<script>
    $(document).ready(function(){
            $(".dropZone").on("drop",draggedFilesValue);
            $(".dropZone").on("dragover",allowDrop);
    });
</script>
</head>
<body>

<div id="uploadDialog">
<div id="progressbar"><div id="porgressbar_done"></div></div>
<div id="uploadingFileName"></div><div id="uploadedFileNumber"></div>
</div>
	
<div class="dropZone">DROP HERE
    <table class="fileList">
    </table>
</div>

</body>
</html>
