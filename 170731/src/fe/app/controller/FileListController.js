/**
 *
 */
import FileListModel from "../model/FileListModel.js"

import FileListView from "../view/FileListView.js"
import FileUploadStateListView from "../view/FileUploadStateListView.js"

import DragAndDropAction from '../lib/DropHandler.js';

class FileListController {
	constructor(){
		console.log("controller starts..");
		this._view =  new FileListView("#fileList");
		this._uploadStateView = new FileUploadStateListView("#uploadStateList");
		this._model = new FileListModel();

		this._bindModelAndView();
		this._bindStaticDropEvents();
		this._bindDynamicClickEvents();

		this._model.apiFileList();
	}
	_bindModelAndView(){
		let This = this;
		this._model.on("change:add", function(jsonInfo) {
			This._view.rendering(jsonInfo);
		});
		this._model.on("change:dispatched", function(jsonInfo) {
			This._uploadStateView.rendering(jsonInfo);
		});
		this._model.on("progres:uploading", function(id, progress) {
			This._uploadStateView.progressRendering(id, progress);
		});
	}
	_bindStaticDropEvents(){
		$("#dropZone").on("drop", {toModel : this._model}, DragAndDropAction.drop);
		$("#dropZone").on("dragover",DragAndDropAction.dragover);
	}
	_bindDynamicClickEvents(){
		let fileListDom = this._view.getDomForEventBinding()
		fileListDom.on("click", ".file", function(event){
			console.dir("zipFile Viewer starts here...");
			new zipFileController();
		});
	}
}

export default FileListController;
