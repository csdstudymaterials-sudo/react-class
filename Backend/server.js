console.log("Prakash");
setTimeout(()=>{
console.log("Commander");
},2000);
console.log("Sashwath");
Promise.resolve("Promise").then
(res=>{console.log("Swasth")});
const http=require("http");
const server=http.createServer((req,res)=>{
    res.end("Hello World");
});
server.listen(3000,()=>{
    console.log("Server running in 3000");
})