// khai bao 
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

//set thu muc chua views
app.set('views', path.join(__dirname, 'views'));
// set views engine (template engine)
app.set("view engine", "hbs");

// render home(res req)
app.get('/', (req, res) => {
    let name = "Greenwich";
    let address = "Pham Van Bach 10";
   res.render('index', {name: name, address: address}); 
});
app.get('/city', (req, res) => {
    let cities =["HN", "DN", "HCM"] ;
   res.render('city', {cities: cities}); 
});

// listen port
app.listen(port, () => {
    console.log('listening on port: http://localhost:3000 ');
});
