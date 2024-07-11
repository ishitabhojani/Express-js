const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/home.html')
})
app.get('/home', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(__dirname + '/home.html')
  })
app.get('/about',(req,res) => {
    //res.send('About Page')
    res.sendFile(__dirname + '/about.html')
})


app.get('/contact', (req, res) => {
    // var a = 10;
    // var b = 20;
    // var c = a+b;
    // res.send('Contact Page' + '<br/> A value is ' + a + '<br/> B value is ' + b + '<br/> C value is: ' + c)
    res.sendFile(__dirname + '/contact.html')
})

app.get('/cosmetic', (req,res) => {
    res.send('Cosmetic Page')
})

app.get('/cosmetic/surat', (req, res) => {
    res.send('Surat Cosmetic Page')
})

app.get('/process', (req,res) => {
    var English = req.query.txt1;
    var Maths = req.query.txt2;
    var Science = req.query.txt3;
    var Sanskrit = req.query.txt4;
    var Hindi = req.query.txt5;
    var Total = parseInt(English) + parseInt(Maths) + parseInt(Science) + parseInt(Sanskrit) + parseInt(Hindi);
    var Percentage = (Total/500)*100;
    // ans = "";
   
    // var msg = `<table> <tr>
    // <tr>
    // <td> `
    res.send('Your Percentage is: ' + Percentage + '<br/> Your Total Marks is:' + Total )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})