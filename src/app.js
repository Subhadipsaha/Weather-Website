const path = require("path")
const express = require("express")
const hbs = require("hbs")
const geocode = require("./utilities/geocode")
const weathercode = require("./utilities/weathercode")
const chalk = require("chalk")

//Create Expess App
const app = express()
const port= process.env.PORT || 3000

//Define paths for express config
const publicDirecttoryPath= path.join(__dirname,"../public")
const viewPath= path.join(__dirname,"../templates/views")
const partialsPath= path.join(__dirname,"../templates/partials")


//Setup handlebergs engine and view location
app.set("view engine","hbs")
app.set("views",viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirecttoryPath))

app.get("",(req,res)=>{
    res.render("index",{
        title: "Weather Forecast",
        name:"Subhadip"
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About our App",
        name:"Subadip"
    })
})

app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Help Page"
    })
})




app.get("/weather",(req,res)=>{
    if(!req.query.address){
       return res.send({error:"Please provide an address"})
    }
    const address = req.query.address
    geocode(address,(error,{latitude,longitude,location}={})=>{
        
        if(error){
           return res.send({error})
        }
        weathercode(latitude,longitude,(error,weatherdata)=>{
            (error?res.send({error}):res.send({
                locaton:location,
                weatherdata:weatherdata
            }))
          
          })
    })
})

app.get("/help/*",(req,res)=>{
    res.render("error",{
        title:"Help Article not found"
    })
})

app.get("*",(req,res)=>{
    res.render("error",{
        title:"Error 404, page not found"
    })
})
app.listen(port,()=>{
    console.log("Server is up on PORT "+port)
})

//app.com
//app.com/help
//app.com/about

