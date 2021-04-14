var drums = false;
var bass = false;
var synth = false;
var piano = false;
var melody = false;

function updateAudio() {
    var audio_element = document.getElementById("final_audio");
    var audio_id = getAudioID();
    audio_element.pause();
    var current_time = audio_element.currentTime;

    switch (audio_id) {
        case '00000':
            audio_element.setAttribute('src', '../audio/00000.wav');
            break;
        case '00001':
            audio_element.setAttribute('src', '../audio/00001.wav');
            break;
        case '00010':
            audio_element.setAttribute('src', '../audio/00010.wav');
            break;
        case '00100':
            audio_element.setAttribute('src', '../audio/00100.wav');
            break;
        case '01000':
            audio_element.setAttribute('src', '../audio/01000.wav');
            break;
        case '10000':
            audio_element.setAttribute('src', '../audio/10000.wav');
            break;
        case '00011':
            audio_element.setAttribute('src', '../audio/00011.wav');
            break;
        case '00101':
            audio_element.setAttribute('src', '../audio/00101.wav');
            break;
        case '01001':
            audio_element.setAttribute('src', '../audio/01001.wav');
            break;
        case '10001':
            audio_element.setAttribute('src', '../audio/10001.wav');
            break;
        case '00110':
            audio_element.setAttribute('src', '../audio/00110.wav');
            break;
        case '01010':
            audio_element.setAttribute('src', '../audio/01010.wav');
            break;
        case '10010':
            audio_element.setAttribute('src', '../audio/10010.wav');
            break;
        case '01100':
            audio_element.setAttribute('src', '../audio/01100.wav');
            break;
        case '10100':
            audio_element.setAttribute('src', '../audio/10100.wav');
            break;
        case '11000':
            audio_element.setAttribute('src', '../audio/11000.wav');
            break;
        case '00111':
            audio_element.setAttribute('src', '../audio/00111.wav');
            break;
        case '01011':
            audio_element.setAttribute('src', '../audio/01011.wav');
            break;
        case '10011':
            audio_element.setAttribute('src', '../audio/10011.wav');
            break;
        case '01101':
            audio_element.setAttribute('src', '../audio/01101.wav');
            break;
        case '10101':
            audio_element.setAttribute('src', '../audio/10101.wav');
            break;
        case '11001':
            audio_element.setAttribute('src', '../audio/11001.wav');
            break;
        case '01110':
            audio_element.setAttribute('src', '../audio/01110.wav');
            break;
        case '10110':
            audio_element.setAttribute('src', '../audio/10110.wav');
            break;
        case '11010':
            audio_element.setAttribute('src', '../audio/11010.wav');
            break;
        case '11100':
            audio_element.setAttribute('src', '../audio/11100.wav');
            break;
        case '01111':
            audio_element.setAttribute('src', '../audio/01111.wav');
            break;
        case '10111':
            audio_element.setAttribute('src', '../audio/10111.wav');
            break;
        case '11011':
            audio_element.setAttribute('src', '../audio/11011.wav');
            break;
        case '11101':
            audio_element.setAttribute('src', '../audio/11101.wav');
            break;
        case '11110':
            audio_element.setAttribute('src', '../audio/11110.wav');
            break;
        case '11111':
            audio_element.setAttribute('src', '../audio/11111.wav');
            break;
        default:
            break;
    }

    audio_element.currentTime = current_time;
    if (audio_id != '00000') audio_element.play();
}

function getAudioID() {
    var placeholder_id = '';

    drums ? placeholder_id += '1' : placeholder_id += '0';
    bass ? placeholder_id += '1' : placeholder_id += '0';
    synth ? placeholder_id += '1' : placeholder_id += '0';
    piano ? placeholder_id += '1' : placeholder_id += '0';
    melody ? placeholder_id += '1' : placeholder_id += '0';

    return placeholder_id;
}

document.addEventListener('DOMContentLoaded', function () {
    var drums_checkbox = document.getElementById("check0");
    var bass_checkbox = document.getElementById("check1");
    var synth_checkbox = document.getElementById("check2");
    var piano_checkbox = document.getElementById("check3");
    var melody_checkbox = document.getElementById("check4");

    drums_checkbox.addEventListener('change', function () {
        drums_checkbox.checked ? drums = true : drums = false;
        updateAudio();
    });

    bass_checkbox.addEventListener('change', function () {
        bass_checkbox.checked ? bass = true : bass = false;
        updateAudio();
    });

    synth_checkbox.addEventListener('change', function () {
        synth_checkbox.checked ? synth = true : synth = false;
        updateAudio();
    });

    piano_checkbox.addEventListener('change', function () {
        piano_checkbox.checked ? piano = true : piano = false;
        updateAudio();
    });

    melody_checkbox.addEventListener('change', function () {
        melody_checkbox.checked ? melody = true : melody = false;
        updateAudio();
    });
});