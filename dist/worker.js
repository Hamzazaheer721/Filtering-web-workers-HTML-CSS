let data;
let dataArray;
onmessage = function(e){
	if(e.data[1] === "first"){		
		data = e.data[0];
		dataArray = []
		for (keys in data) {
			if(data[keys].age < 21){
				dataArray.push(data[keys])
			}
		}
		postMessage([dataArray,"first"])
	}else{
		dataArray = [];
		data = e.data[2];
		let value = e.data[0]
		for (let i = 0; i < data.length; i++){
			value = value.toLowerCase().trim();
			var name = data[i].name.toLowerCase().trim();
			if(name.includes(value)){
				dataArray.push(data[i])
			}
		}
		console.log("data being sent :", dataArray)
		postMessage([dataArray,'second']);
	}
	
}
