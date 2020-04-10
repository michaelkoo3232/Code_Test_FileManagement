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


    signup: async function (req,res){

        if(!req.body.User)
            return res.badRequest("Form data not received");

            await User.create(req.body.User);

            return res.ok("User successfully");

    },


    logout: async function (req, res) {

        req.session.destroy(function (err) {
        
            if (err) return res.serverError(err);
            
            return res.ok("Log out successfully.");
            
        });
    },

    

};

