var mysql = require('mysql');
var express = require('express')
var app = express()
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

app.put('/filter',function(req,res) {
    console.log(req.body.data)
    conn.query("select * from timesheet where project = ?",[req.body.data],function(err,result,field){
        if(!err){
            res.json(result);
            console.log(result)
        }
    })
})
app.get('/getTimesheet',function(req,res) {

    conn.query("select * from timesheet t join avail_project a on t.project_name = a.project",function(err,result,field) {
        if(!err){
            res.json(result)
        }
        else console.log("Error")
    })
})

app.post('/postTimesheet',function(req,res){
    console.log(req.body)
    var sql = "insert into timesheet(date,project,userid,hours,comments) values(?,?,?,?,?)";
    conn.query(sql,[req.body.date,req.body.project,1,req.body.hours,req.body.comment],
    function(err,result,field) {
        if(!err)
            console.log(result);
        else console.log("Error")
    })
})

app.listen(3000,() => console.log("Running"))


