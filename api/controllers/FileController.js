/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var fs = require('fs');
module.exports = {

    upload: async function (req, res) {
        username = req.session.username;
        var file = req.file("file");
        file.upload(
            {
                adapter: require('skipper-gridfs'),
                uri: 'mongodb://127.0.0.1:27017/admin',
                dirname: '../../assets/' + username

            },
            async function (err, uploadedfile) {
                if (err) console.log(err);
                sails.log(uploadedfile);
                var createdFile = await File.create({ filename: uploadedfile[0].filename, path: uploadedfile[0].fd }).fetch();
                sails.log('uploaded file:', createdFile);
                await User.addToCollection(req.session.userID, 'files', createdFile.id)
                var userfile = await User.find({ id: req.session.userID }).populate("files");
                return res.ok("uploaded successfully");
            })


    },

    rename: async function (req, res) {
        const model = await File.find({ id: req.params.id });
        if (req.method == "GET") {

            sails.log('rename file:' + model[0].filename);
            return res.view('file/rename', { file: model[0] })

        } else {
            sails.log("renaming file");
            var extension = model[0].filename.split('.').pop();
            await File.update(req.params.id).set({
                filename: req.body.filename + "." + extension,
                path: model.path,

            })
            return res.ok("rename successfully!");
        }



    },

    share: async function (req, res) {
        sails.log("file share to :");
        if(req.method=="GET"){
            const model = await File.find({contributers: req.session.username});

            return res.view('file/shareFiles',{'p': model})
        }
        var shareUser = await User.findOne({ username: req.params.username });
       sails.log(shareUser);
        var originalfile = await File.findOne({id: req.params.id});
        await File.update(req.params.id).set({
            filename: originalfile.filename, 
            path : originalfile.path,
            contributers : shareUser.username 
                })

                return res.ok();
    },

    download: async function (req, res) {
        var blobAdapter = require('skipper-gridfs')({
            uri: 'mongodb://localhost:27017/admin'
        });

        var realFile = await File.find({ id: req.params.id });
        var file = realFile[0];
        fd = file.path;
        var gushingStream = blobAdapter.read(fd);
        res.set("Content-disposition", "attachment; filename=" + file.filename)
        return gushingStream.pipe(res);
    },

    delete: async function (req, res) {

        if (req.method == "GET") return res.forbidden();
        var blobAdapter = require('skipper-gridfs')({
            uri: 'mongodb://localhost:27017/admin'
        });

        var realFile = await File.find({ id: req.params.id });
        var path = realFile[0];
        path = path.path;
        var fd = path; 
        blobAdapter.rm(fd);
        var models = await File.destroy(req.params.id).fetch();

        if (models.length == 0) return res.notFound();

        return res.redirect("/")


    },



    view: async function (req, res) {

        const models = await User.findOne({ id: req.session.userID }).populate("files");

        return res.view('file/view', { 'p': models.files });
    },


}
