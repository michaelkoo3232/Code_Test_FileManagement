/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login: async function (req, res) {
    
        if (!req.body.username || !req.body.password) return res.badRequest();
    
        var user = await User.findOne({ username: req.body.username });
    
        if (!user) return res.status(401).send("User not found");
    
        const match = await sails.bcrypt.compare(req.body.password, user.password);
          
        if (!match) return res.status(401).send("Wrong Password");
    
        req.session.regenerate(function (err) {
    
            if (err) return res.serverError(err);
    
            req.session.username = req.body.username;
            req.session.userID = user.id; 
    
            sails.log("[Session] ", req.session);
            
            return res.ok("Login successfully.");
    
        });
    
    },
    logout: async function (req, res) {

        req.session.destroy(function (err) {

            if (err) return res.serverError(err);

            return res.redirect("/");

        });
    },


    signup: async function (req,res){
       var samename = await User.findOne(req.body.username);
       if(samename){
        return  res.status(401).send("username already in used");
       }else{
        sails.bcrypt = require('bcryptjs');
        const saltRounds = 10;
        var  hash = await sails.bcrypt.hash(req.body.password, saltRounds);
        await User.create({username: req.body.username, password:hash});
        return res.ok();
       }
    },


    

};

