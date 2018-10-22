var userService = require("../services/UserService");
exports.ensureAthenticated = function (req,res,next) {
    userService.tieneAcceso(req,function (err,response) {
        if(err)res.status(400).json(err);
        else {
            console.log(response);
            req.body.usuario = response;
            next();
        }
    })
};