const transcript = require('../transcript');
const linear16 = require('linear16');

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

                await linear16('./src/resources/' + uploadedFile.name, './src/resources/spext.wav')
                    .then(outPath => console.log(outPath)).catch(console.error);

                const transcriptedText = await transcript('./src/resources/spext.wav').catch(console.error);

                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: uploadedFile.name,
                        mimetype: uploadedFile.mimetype,
                        size: uploadedFile.size
                    },
                    transcriptedText: transcriptedText
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
}