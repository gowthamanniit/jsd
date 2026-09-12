// import event
var events=require("events")

// create object to events emitter
var eventEmitter=new events.EventEmitter();

// bind event (called)
eventEmitter.on("karthika",()=>{
    console.log("events called")
})

// fire event (calling)
eventEmitter.emit("karthika")
eventEmitter.emit("karthika")
eventEmitter.emit("karthika")
eventEmitter.emit("karthika")