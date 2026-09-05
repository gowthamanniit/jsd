const http=require("http")
http.createServer(function(req,res){

    res.end("<h1>Welcome To Node JS </h1>");
}).listen(9887)
console.log("port listening at 9887.........")