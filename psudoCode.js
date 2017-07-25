class Controller { // view에서 발생한 이벤트(click...우클릭..등..)에 따라 어떤 행동을 해줄지 흘러보내는 역할 
	constructor(ServiceModel, View){
		this.ServiceModel = ServiceModel;
		this.view = View;
		bind();
	}
	bind() { 
		console.log("View 에서 일어나는 이벤트를 bind해준다.");
	}
}

class View {
	constructor(dom){
		this.dom = dom;
	}
	rendering(modelObject) {
		// 한개의 modelObject에 대해 처리하는 부분.
	}
}

class collectionModel { //collectinoModel에서의 변형이 일어나는 경우 views가 변형된다.
	constructor(){
		this.modelList //List 일수도 트리 일수도!!
		this.views // modelList의 변형이 일어나면 전달해야할 views들.
	}
	subscribe(view){} //rendering 되어야 할 view들.
	publish(){
		forEach this.views.rendering 
	}
	add(){} // 
	remove(){}
	reset(){}
	change(){}
	
}

class serviceModel { 
	constructor(){
		this.collectionModel; // collectionModel 타입. 여기가 변경되면 view 도 변경되도록 만들어야함.
		
	}
	upload(){ // 흠...
		let url = "";
		let method = "";
	}
	donwload(){
		let url = "";
		let method = "";
	}
	initModel(){
		let url = "";
		let method = "";
	}
	
}
