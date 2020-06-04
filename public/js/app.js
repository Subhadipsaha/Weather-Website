console.log("Client side javascript code")



const weatherForm= document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")



weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const location = search.value
    //console.log(location);

    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{

response.json().then((data)=>{
    messageOne.textContent=""
messageTwo.textContent=""
if(data.error){
    console.log(data.error);
    messageOne.textContent=data.error
}else{
    console.log(data.locaton);
    console.log(data.weatherdata);

    messageOne.textContent=data.locaton
    messageTwo.textContent=data.weatherdata
    
}
})

})
    
})