/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    index: function (req, res) {

        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(
            '<form action="http://localhost:1337/file/upload" enctype="multipart/form-data" method="post">' +
            '<input type="text" name="title"><br>' +
            '<input type="file" name="avatar" multiple="multiple"><br>' +
            '<input type="submit" value="Upload">' +
            '</form>'
        )
    },
    // upload: function (req, res) {
    //     var username = req.session.username;

    //     req.file('upload').upload({
    //         // don't allow the total upload size to exceed ~10MB
    //         maxBytes: 10000000
    //     }, function whenDone(err, uploadedFiles) {
    //         if (err) {
    //             return res.serverError(err);
    //         }

    //         // If no files were uploaded, respond with an error.
    //         if (uploadedFiles.length === 0) {
    //             return res.badRequest('No file was uploaded');
    //         }
    //         sails.log("upload files", uploadedFiles);
    //     });
    // }

    upload: async  function (req, res) {
        var username = req.session.username;
       
        var file =  req.file("file");
        file.upload(
        {
            dirname: '../../assets/' + username

        },
        async function (err, uploadedfile) {
            if (err) console.log(err);
            sails.log(uploadedfile[0].filename);
            var createdFile = await File.create({filename: uploadedfile[0].filename}).fetch();
            sails.log('Finn\'s id is:', createdFile.filename);
            return res.ok("uploaded successfully");
         })
       

    },

};

