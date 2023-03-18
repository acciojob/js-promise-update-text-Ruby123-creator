//your JS code here. If required.
let div = document.getElementById("output")
  function getdata(){
	  return new Promise((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve("Hello, world!")
		  },1000)
	  })
  }
getdata.then((data)=>{
	div.innerText = data;
})