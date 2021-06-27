const speech = require('@google-cloud/speech').v1p1beta1;
const fs = require('fs');
const linear16 = require('linear16');

const client = new speech.SpeechClient();

/*(async () => {
    try {
        const outPath = await linear16({
            inPath: './resources/spext.m4a',
            outPath: './resources/spext.wav'
        });
        console.log(outPath);
    }
    catch (err){
        console.log(err);
    }
    main().catch(console.error);
})();*/


module.exports = async function (filename) {
    //const filename = './resources/spext.wav';

    /*const file = fs.readFileSync(filename);
    const audioBytes = file.toString('base64');*/

    const audio = {
        content: fs.readFileSync(filename).toString('base64')
    };
    const config = {
        encoding: 'LINEAR16',
        languageCode: 'en-US',
        sampleRateHertz: 16000,
        enableSeparateRecognitionPerChannel: true,
        alternativeLanguageCodes: ['de-DE', 'ar-SA', 'sr-RS']
    };
    const request = {
        audio: audio,
        config: config,
    };

    const [response] = await client.recognize(request);

    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log(`Transcription: ${transcription}`);
    return transcription;
}
//main().catch(console.error);
