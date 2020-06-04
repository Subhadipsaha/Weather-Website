const weatherForm= document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")
//const weatherbody = document.body.style("body")



weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const location = search.value
    //console.log(location);

    fetch(`/weather?address=${location}`).then((response)=>{

response.json().then((data)=>{
    const realTemp = data.feelsLike
    
    if(realTemp < 20){
       document.body.style.backgroundColor = "rgb(114, 235, 231)"
      
   }
    else if (realTemp>20 && realTemp <35){
        document.body.style.backgroundColor = "rgb(250, 238, 127)"
       
    }
    else {
        document.body.style.backgroundColor = "rgb(250, 141, 69)"
       
    }
    messageOne.textContent=""
messageTwo.textContent=""
if(data.error){
   
    messageOne.textContent=data.error
}else{
    messageOne.textContent=data.locaton
    messageTwo.textContent=data.weatherdata
    
}
})

})
    
})