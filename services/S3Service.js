var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var config = require('../orm/config/config');
var models = require('../orm/models');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const baseHost = config.aws.baseHost;

const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com');
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: config.aws.access,
    secretAccessKey: config.aws.secret,
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'calidad-software',
        acl: 'public-read',
        key: function (request, file, cb) {
            console.log(file);
            request.file = file;
            cb(null, request.time+ file.originalname);
        }
    })
}).array('upload', 1);

function S3Service() {

}


S3Service.prototype.upload = function (req, response, callback) {
    req.time = Date.now().toString();
    upload(req, response, function (error) {
        if (error) callback(error)
        else callback(null, baseHost+req.time+req.file.originalname);
    })
};

module.exports = new S3Service();