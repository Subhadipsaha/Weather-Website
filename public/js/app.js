const weatherForm= document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")
const messageThree = document.querySelector("#message-3")
const messageFour = document.querySelector("#message-4")
//const weatherbody = document.body.style("body")



weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const location = search.value
    //console.log(location);

    fetch(`/weather?address=${location}`).then((response)=>{

response.json().then((data)=>{
    const realTemp = data.feelsLike
    //console.log(realTemp)
    
    if(realTemp < 20){
       //document.body.style.backgroundColor = "rgb(114, 235, 231)"
       document.body.style.backgroundImage ="url('../img/winter.jpg')";
       console.log("winter");
       
       
   }
    else if (realTemp>20 && realTemp <35){
        //document.body.style.backgroundColor = "rgb(250, 238, 127)"
        document.body.style.backgroundImage ="url('../img/moderate.jpg')";
        console.log("Moderate");
       
       
    }
    else {
        //document.body.style.backgroundColor = "rgb(250, 141, 69)"
        document.body.style.backgroundImage ="url('../img/summer.jpg')";
        console.log("Summer");
        
       
    }
    messageOne.textContent=""
messageTwo.textContent=""
messageThree.textContent=""
messageFour.textContent=""
if(data.error){
   
    messageOne.textContent=data.error
}else{
    messageOne.textContent=data.locaton
    messageTwo.textContent=data.weatherdata
    messageThree.textContent=data.temperature
messageFour.textContent=`Feels like ${data.feelsLike}\u00B0C`
    
}
})

})
    
})