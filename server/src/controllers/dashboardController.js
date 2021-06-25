module.exports = {
    async upload (req, res) {
        try {
            if(!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                let uploadedFile = req.files.file;

                await uploadedFile.mv('./src/resources/' + uploadedFile.name);

                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: uploadedFile.name,
                        mimetype: uploadedFile.mimetype,
                        size: uploadedFile.size
                    }
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
}