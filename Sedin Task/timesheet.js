const mysql = require('mysql');
const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors());
app.use(bodyparser.json())

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "form task"
  });

conn.connect((err) => {
    if(!err)
    {       
        console.log("Connection Established")
        //conn.query("insert into timesheet (date,project,userid,hours,comments) values (?,?,?,?,?)",[date],[proj_name],[userid],[hours],[comment],() => {
            
    }
    else console.log("Error Occured");
})

app.get('/',function(req,res) {
    console.log("Inside");
})
app.get('/getTimesheet',(req,res) => {
    conn.connect()
    conn.query("select * from timesheet",(err,result,field) => {
        if(!err)
            console.log(result);
        else console.log("Error")
    })
})
app.listen(5000,() => console.log("Running"))


