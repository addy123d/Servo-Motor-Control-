var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var servo = new five.Servo(8);

  const express = require("express");
    const port = process.env.PORT || 5500;
    const host = "0.0.0.0";

    var app = express();

    app.use("/",express.static(__dirname + "/public"));

    app.get("/max",(req,res)=>{
        console.log("Max !");
        servo.max();
        res.status(200).json("Done")
    })

    app.get("/min",(req,res)=>{
        console.log("Min !");
        servo.min();
        res.status(200).json("Done")
    })

    app.get("/to",(req,res)=>{

        servo.to(10);

        res.status(200).json({
            "Message" : "Success !"
        })
    })


    app.listen(port,host,()=>{
        console.log("Server running ... ");
    })

});

