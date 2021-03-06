"use strict"

let horas = 0;
let minutos = 0;
let segundos = 0;

const tempo = 1000; //Quanto milesimos vale 1 segundo
let cron;

function start(){
    cron = setInterval(() => {timer();}, tempo)
};

function pause(){
    clearInterval(cron);
};

function stop(){
    clearInterval(cron);
    horas = 0;
    minutos = 0;
    segundos = 0;

    document.querySelector('#num').innerText = "00:00:00";
};

function timer(){
    segundos++;

    if(segundos == 60){
        segundos = 0;
        minutos++;
        if(minutos == 60){
            minutos = 0;
            horas++;
        }
    }


    let format = (horas < 10 ? '0' + horas : horas) + ":" + (minutos < 10 ? '0' + minutos : minutos) + ":" + (segundos < 10 ? '0' + segundos : segundos);
    document.querySelector('#num').innerText = format;
};