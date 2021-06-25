const speech = require('@google-cloud/speech');
const fs = require('fs');


const client = new speech.SpeechClient();

async function main() {
    const filename = './resources/spext_mono.wav';

    const file = fs.readFileSync(filename);
    const audioBytes = file.toString('base64');

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        content: audioBytes
    };
    const config = {
        encoding: 'LINEAR16',
        languageCode: 'en-US',
        enableSeparateRecognitionPerChannel: true
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
}
main().catch(console.error);