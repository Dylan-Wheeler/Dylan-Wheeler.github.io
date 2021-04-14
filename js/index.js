var drums = false;
var bass = false;
var synth = false;
var piano = false;
var melody = false;

function updateAudio() {
    var audio_element = document.getElementById("final_audio");
    var audio_path = getAudioPath();
    audio_element.pause();
    var current_time = audio_element.currentTime;

    audio_element.setAttribute('src', audio_path);

    audio_element.currentTime = current_time;
    if (audio_path != '../audio/00000.wav') audio_element.play();
}

function getAudioPath() {
    var placeholder_path = '../audio/';

    placeholder_path += drums ? '1' : '0';
    placeholder_path += bass ? '1' : '0';
    placeholder_path += synth ? '1' : '0';
    placeholder_path += piano ? '1' : '0';
    placeholder_path += melody ? '1' : '0';

    placeholder_path += '.wav';

    return placeholder_path;
}

document.addEventListener('DOMContentLoaded', function () {
    var drums_checkbox = document.getElementById("check0");
    var bass_checkbox = document.getElementById("check1");
    var synth_checkbox = document.getElementById("check2");
    var piano_checkbox = document.getElementById("check3");
    var melody_checkbox = document.getElementById("check4");

    drums_checkbox.addEventListener('change', function () {
        drums = drums_checkbox.checked ? true : false;
        updateAudio();
    });

    bass_checkbox.addEventListener('change', function () {
        bass = bass_checkbox.checked ? true : false; 
        updateAudio();
    });

    synth_checkbox.addEventListener('change', function () {
        synth = synth_checkbox.checked ? true : false;
        updateAudio();
    });

    piano_checkbox.addEventListener('change', function () {
        piano = piano_checkbox.checked ? true : false;
        updateAudio();
    });

    melody_checkbox.addEventListener('change', function () {
        melody = melody_checkbox.checked ? true : false;
        updateAudio();
    });
});