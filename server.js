var express = require('express');
var server =  express();
var bodyParser = require('body-parser');
var session = require('express-session');

//moteur de template
server.set('view engine', 'ejs');

//utilisation des middleware
server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use(session({
    secret:'jojo',
    resave:false,
    saveUninitialized: true,
    cookie:{secure:false}

}))

server.use(require('./middlewares/flash'));




//Les router
server.get('/', function(req, res){

    
   // res.setHeader('content-type','text/html');
   var Message = require('./models/message');
   Message.recuperMessage(messages){
    res.render('pages/index', {messages:messages})
    console.log(req.session);
   };
  
});


server.post('/', function(req, res){

    if(req.body.message === undefined || req.body.message === ''){
        req.flash('error',  "Vous n'avez pas entré de message");
        res.redirect('/');
    }else{
        var Message = require('./models/message');
        Message.create(req.body.message, function(){
            req.flash('succes', "enregistré avec succès");
            console.log('Enregistrer avec succes!!!!');
            res.redirect('/');
        })
    }
    console.log(req.body);
 })
server.listen(8088);