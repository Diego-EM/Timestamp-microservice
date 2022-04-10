const express = require('express');
const dateController = require('./controller/dateController')
const app = express();

app.set('port',process.env.PORT || 3000);

//Routes
app.get('/api/:date?',(req,res)=>{
    let date = req.params.date;
    if (/^\d{0,}$/.test(date)) date = parseInt(date);
    res.json(dateController.convertTime(date));
})

//Index file
app.use('/',express.static('./public'));

app.listen(app.get('port'),()=>{
    console.log(`Server running on port ${app.get('port')}`)
})