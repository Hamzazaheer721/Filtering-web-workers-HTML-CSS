onmessage = function(e){
	if(e.data[1] === "first"){
		let data = e.data[0];
		let dataArray = []
		for (keys in data) {
			if(data[keys].age < 21){
				dataArray.push(data[keys])
			}
		}
		postMessage([dataArray,"first"])
	}else{
		
	}
	
}
