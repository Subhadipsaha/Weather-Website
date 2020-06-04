const request = require("request");


const weathercode = (latitude,longitude,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=2464e84da54982493fec5b387bbab42d&query=${latitude},${longitude}`
    request({url, json:true},(error,response)=>{
        const {body}=response
        if(error){
            callback("Unable to connect to weather services",undefined)
        }
        else if(body.error){
            callback("Unable to find location",undefined)
        }
        else{
           // callback(undefined,`${body.current.weather_descriptions}.Its is currently ${body.current.temperature} degrees.The current temperature feelslike ${body.current.feelslike}.`)
            callback(undefined,{
                //"description":`${body.current.weather_descriptions}.Its is currently ${body.current.temperature}\u00B0C.The current temperature feelslike ${body.current.feelslike}.`,
                "description":body.current.weather_descriptions,
                "temperature":`${body.current.temperature}\u00B0C`,
               // "tempchecker":body.current.temperature,
                "feelsLike":`${body.current.feelslike}  `
            })
        }
    })

}

module.exports=weathercode