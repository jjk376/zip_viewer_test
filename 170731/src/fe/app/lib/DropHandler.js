let DragAndDropAction = {
	drop : function(event) {
		event.preventDefault();
		let draggedfiles = event.originalEvent.dataTransfer.files;
		event.data.toModel.dispatchFiles(draggedfiles);
	},
	dragover : function(event) {
		event.preventDefault();	
	}
}
export default DragAndDropAction
