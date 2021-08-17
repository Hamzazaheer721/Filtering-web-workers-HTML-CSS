let dataResponse = "";
var worker = new Worker('/dist/worker.js')

fetch('/json/generated.json').then((res) => {
  return res.json();
}).then(data => {
  let temp = "";
  worker.postMessage([data, "first"])
  worker.onmessage = function (e){
    if(e.data[1] === 'first'){
      const _data = e.data[0];
      if(_data.length > 0){
        _data.forEach((u)=>{
          temp += "<tr>"
          temp += "<td>" + u.age + "</td>"
          temp += "<td>" + u.name + "</td>"
          temp += "<td>" + u.gender + "</td>"
          temp += "<td>" + u.email + "</td></tr>"
        })
        document.getElementById("data").innerHTML = temp;
      }
    }
    else{
      
    }
    
  }
})
