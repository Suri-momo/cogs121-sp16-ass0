var models  = require('../models');

 exports.send = function(req, res) {
        console.log(req.body); // help you see what is inside of req.body
            // your solution here
        var content = req.body.content;
        var email = req.body.email;
        var created = req.body.created;
        res.render("send",{"email":email,"content":content;"created":created});
        var newMsg = new models.Message({"email":email,"content":content;
        "created":created});
        newMsg.save(aftersaving);
        function afterSaving(err){
           //if(err){console.log(err):res.send(500);}
           res.redirect('/');//redirect to home
        }
        //res.render("send", {"name" : name, "email" : email, "created":crea 
        //ted});

             };
 
