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
    if (audio_path != '00000') audio_element.play();
}

function getAudioPath() {
    var placeholder_path = '../audio/';

    drums ? placeholder_path += '1' : placeholder_path += '0';
    bass ? placeholder_path += '1' : placeholder_path += '0';
    synth ? placeholder_path += '1' : placeholder_path += '0';
    piano ? placeholder_path += '1' : placeholder_path += '0';
    melody ? placeholder_path += '1' : placeholder_path += '0';

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