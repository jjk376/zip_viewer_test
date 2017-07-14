/**
 * 
 */

function FolderNode(data, children) {
	this.parent = null;
	this.data = data;
	this.children = children; // children은 foldernode 배열들임.
}

FolderNode.prototype.addChild = function(newChild) {
	newChild.parent = this;
	this.children.push(newChild);
}
FolderNode.prototype.showChildren = function() { 
	for(var i=0; i < this.children.length; i++) {
		// do something here
	}
}

function FolderTree(rootNode) {
	this.root = rootNode;
}

FolderTree.prototype.trackNode = function() {
	if (node.children == null) 
	for(var i=0; i < this.children.length; i++) {
		// track children....
		children[i].node
	}
}
