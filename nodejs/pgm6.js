buf=new Buffer.alloc(250)
                    //syntax:  Buffer.alloc(size, fill, encoding);
console.log(buf);  //output: default all value 00
len=buf.write("welcome to gowthaman")
console.log(len)
console.log(buf)
console.log(buf.toString())