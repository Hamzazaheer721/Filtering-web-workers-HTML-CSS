onmessage = function(e){
	if(e.data[1] === "first"){		
		let data = e.data[0];
		let dataArray = [];
		for (keys in data) {
			if(data[keys].age < 21){
				dataArray.push(data[keys])
			}
		}
		postMessage([dataArray,"first"])
	}else{
		let dataArray = [];
		let data = e.data[2];
		let value = e.data[0]
		for (let i = 0; i < data.length; i++){
			value = value.toLowerCase().trim();
			var name = data[i].name.toLowerCase().trim();
			if(name.includes(value)){
				dataArray.push(data[i])
			}
		}
		postMessage([dataArray,'second']);
	}
	
}
