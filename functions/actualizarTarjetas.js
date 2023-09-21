const $diaActual = document.querySelector(".dia-actual");
const $dia2 = document.querySelector(".dia-2");
const $dia3 = document.querySelector(".dia-3");
const $dia4 = document.querySelector(".dia-4");
const $ciudad = document.querySelector(".ciudad");

let horario = new Date();
let diaActualHora = horario.getHours();
let diaActual = horario.getDay();
let dia2;
let dia3;
let dia4;

let dias = { "0": "Domingo", "1": "Lunes", "2": "Martes", "3": "Miercoles", "4": "Jueves", "5": "Viernes", "6": "Sabado" };

if (diaActual == 0){
    dia2 = 1;
    dia3 = 2;
    dia4 = 3;
};

if (diaActual == 1){
    dia2 = 2;
    dia3 = 3;
    dia4 = 4;
};

if (diaActual == 2){
    dia2 = 3;
    dia3 = 4;
    dia4 = 5;
};

if (diaActual == 3){
    dia2 = 4;
    dia3 = 5;
    dia4 = 6;
};

if (diaActual == 4){
    dia2 = 5;
    dia3 = 6;
    dia4 = 0;
};

if (diaActual == 5){
    dia2 = 6;
    dia3 = 0;
    dia4 = 1;
};

if (diaActual == 6){
    dia2 = 0;
    dia3 = 1;
    dia4 = 2;
};


export function actualizarTarjetas(json) {

    let ciudad = json.location.name || "Su ubicacion actual";

    let tiempoParcialmenteNublado = false;
    let tiempoNublado = false;
    let tiempoLluvia = false;
    let tiempoNieve = false;


    let tiempoParcialmenteNubladoDia2 = false;
    let tiempoNubladoDia2 = false;
    let tiempoLluviaDia2 = false;
    let tiempoNieveDia2 = false;


    let tiempoParcialmenteNubladoDia3 = false;
    let tiempoNubladoDia3 = false;
    let tiempoLluviaDia3 = false;
    let tiempoNieveDia3 = false;


    let tiempoParcialmenteNubladoDia4 = false;
    let tiempoNubladoDia4 = false;
    let tiempoLluviaDia4 = false;
    let tiempoNieveDia4 = false;


    let nubladoDiaActual = json.timelines.hourly[0].values.cloudCover;
    let lluviaDiaActual = json.timelines.hourly[0].values.precipitationProbability;
    let nieveDiaActual = json.timelines.hourly[0].values.snowIntensity;
    let temperaturaDiaActual = json.timelines.hourly[0].values.temperature;
    let temperaturaMaxDiaActual = json.timelines.daily[0].values.temperatureApparentMax;
    let temperaturaMinDiaActual = json.timelines.daily[0].values.temperatureApparentMin;
    let vientoDiaActual = json.timelines.hourly[0].values.windSpeed;
    let humedadDiaActual = json.timelines.hourly[0].values.humidity;
    let visibilidadDiaActual = json.timelines.hourly[0].values.visibility;
    let probabilidadLluviaDiaActual = json.timelines.daily[0].values.precipitationProbabilityAvg;

    let nubladoDia2 = json.timelines.daily[1].values.cloudCoverAvg;
    let lluviaDia2 = json.timelines.daily[1].values.precipitationProbabilityMax;
    let nieveDia2 = json.timelines.daily[1].values.snowIntensityAvg;
    let temperaturaDia2 = json.timelines.daily[1].values.temperatureAvg;
    let temperaturaMaxDia2 = json.timelines.daily[1].values.temperatureMax;
    let temperaturaMinDia2 = json.timelines.daily[1].values.temperatureMin;
    let vientoDia2 = json.timelines.daily[1].values.windSpeedMax;
    let humedadDia2 = json.timelines.daily[1].values.humidityAvg;
    let visibilidadDia2 = json.timelines.daily[1].values.visibilityAvg;
    let probabilidadLluviaDia2 = json.timelines.daily[1].values.precipitationProbabilityMax;

    let nubladoDia3 = json.timelines.daily[2].values.cloudCoverAvg;
    let lluviaDia3 = json.timelines.daily[2].values.precipitationProbabilityMax;
    let nieveDia3 = json.timelines.daily[2].values.snowIntensityAvg;
    let temperaturaDia3 = json.timelines.daily[2].values.temperatureAvg;
    let temperaturaMaxDia3 = json.timelines.daily[2].values.temperatureMax;
    let temperaturaMinDia3 = json.timelines.daily[2].values.temperatureMin;
    let vientoDia3 = json.timelines.daily[2].values.windSpeedMax;
    let humedadDia3 = json.timelines.daily[2].values.humidityAvg;
    let visibilidadDia3 = json.timelines.daily[2].values.visibilityAvg;
    let probabilidadLluviaDia3 = json.timelines.daily[2].values.precipitationProbabilityMax;

    let nubladoDia4 = json.timelines.daily[3].values.cloudCoverAvg;
    let lluviaDia4 = json.timelines.daily[3].values.precipitationProbabilityMax;
    let nieveDia4 = json.timelines.daily[3].values.snowIntensityAvg;
    let temperaturaDia4 = json.timelines.daily[3].values.temperatureAvg;
    let temperaturaMaxDia4 = json.timelines.daily[3].values.temperatureMax;
    let temperaturaMinDia4 = json.timelines.daily[3].values.temperatureMin;
    let vientoDia4 = json.timelines.daily[3].values.windSpeedMax;
    let humedadDia4 = json.timelines.daily[3].values.humidityAvg;
    let visibilidadDia4 = json.timelines.daily[3].values.visibilityAvg;
    let probabilidadLluviaDia4 = json.timelines.daily[3].values.precipitationProbabilityMax;






    $ciudad.textContent = ciudad;

    $diaActual.querySelector(".dia-actual-parrafo").textContent = dias[diaActual];
    $diaActual.querySelector(".actual").textContent = `${Math.floor(temperaturaDiaActual)}°`;
    $diaActual.querySelector(".max").textContent = `${Math.round(temperaturaMaxDiaActual)}°`;
    $diaActual.querySelector(".min").textContent = `${Math.floor(temperaturaMinDiaActual)}°`;
    $diaActual.querySelector(".velocidad-viento").textContent = `${Math.round(vientoDiaActual)} km/h`;
    $diaActual.querySelector(".porcentaje-humedad").textContent = `${Math.round(humedadDiaActual)} %`;
    $diaActual.querySelector(".visibilidad-km").textContent = `${Math.floor(visibilidadDiaActual)} km`;
    $diaActual.querySelector(".porcentaje-probilidad-lluvia").textContent = `${Math.round(probabilidadLluviaDiaActual)} %`;


    $dia2.querySelector(".dia-2-parrafo").textContent = dias[dia2];
    $dia2.querySelector(".dia-2-actual").textContent = `${Math.floor(temperaturaDia2)}°`;
    $dia2.querySelector(".dia-2-max").textContent = `${Math.round(temperaturaMaxDia2)}°`;
    $dia2.querySelector(".dia-2-min").textContent = `${Math.floor(temperaturaMinDia2)}°`;
    $dia2.querySelector(".dia-2-velocidad-viento").textContent = `${Math.round(vientoDia2)} km/h`;
    $dia2.querySelector(".dia-2-porcentaje-humedad").textContent = `${Math.round(humedadDia2)} %`;
    $dia2.querySelector(".dia-2-visibilidad-km").textContent = `${Math.floor(visibilidadDia2)} km`;
    $dia2.querySelector(".dia-2-porcentaje-probilidad-lluvia").textContent = `${Math.round(probabilidadLluviaDia2)} %`;


    $dia3.querySelector(".dia-3-parrafo").textContent = dias[dia3];
    $dia3.querySelector(".dia-3-actual").textContent = `${Math.floor(temperaturaDia3)}°`;
    $dia3.querySelector(".dia-3-max").textContent = `${Math.round(temperaturaMaxDia3)}°`;
    $dia3.querySelector(".dia-3-min").textContent = `${Math.floor(temperaturaMinDia3)}°`;
    $dia3.querySelector(".dia-3-velocidad-viento").textContent = `${Math.round(vientoDia3)} km/h`;
    $dia3.querySelector(".dia-3-porcentaje-humedad").textContent = `${Math.round(humedadDia3)} %`;
    $dia3.querySelector(".dia-3-visibilidad-km").textContent = `${Math.floor(visibilidadDia3)} km`;
    $dia3.querySelector(".dia-3-porcentaje-probilidad-lluvia").textContent = `${Math.round(probabilidadLluviaDia3)} %`;


    $dia4.querySelector(".dia-4-parrafo").textContent = dias[dia4];
    $dia4.querySelector(".dia-4-actual").textContent = `${Math.floor(temperaturaDia4)}°`;
    $dia4.querySelector(".dia-4-max").textContent = `${Math.round(temperaturaMaxDia4)}°`;
    $dia4.querySelector(".dia-4-min").textContent = `${Math.floor(temperaturaMinDia4)}°`;
    $dia4.querySelector(".dia-4-velocidad-viento").textContent = `${Math.round(vientoDia4)} km/h`;
    $dia4.querySelector(".dia-4-porcentaje-humedad").textContent = `${Math.round(humedadDia4)} %`;
    $dia4.querySelector(".dia-4-visibilidad-km").textContent = `${Math.floor(visibilidadDia4)} km`;
    $dia4.querySelector(".dia-4-porcentaje-probilidad-lluvia").textContent = `${Math.round(probabilidadLluviaDia4)} %`;


    if(nubladoDiaActual > 40 && nubladoDiaActual < 70) tiempoParcialmenteNublado = true;
    if(nubladoDiaActual >= 70) tiempoNublado = true;
    if(lluviaDiaActual >= 50) tiempoLluvia = true; 
    if(nieveDiaActual > 0.2) tiempoNieve = true;

    if(nubladoDia2 > 40 && nubladoDia2 < 70) tiempoParcialmenteNubladoDia2 = true;
    if(nubladoDia2 >= 70) tiempoNubladoDia2 = true;
    if(lluviaDia2 >= 50) tiempoLluviaDia2 = true; 
    if(nieveDia2 > 0.2) tiempoNieveDia2 = true;

    if(nubladoDia3 > 40 && nubladoDia3 < 70) tiempoParcialmenteNubladoDia3 = true;
    if(nubladoDia3 >= 70) tiempoNubladoDia3 = true;
    if(lluviaDia3 >= 50) tiempoLluviaDia3 = true; 
    if(nieveDia3 > 0.2) tiempoNieveDia3 = true;

    if(nubladoDia4 > 40 && nubladoDia4 < 70) tiempoParcialmenteNubladoDia4 = true;
    if(nubladoDia4 >= 70) tiempoNubladoDia4 = true;
    if(lluviaDia4 >= 50) tiempoLluviaDia4 = true; 
    if(nieveDia4 > 0.2) tiempoNieveDia4 = true;

    if(diaActualHora >= 6 && diaActualHora <= 18){
        $diaActual.querySelector(".dia-actual-icon").src = "assets/dia.svg";
        $diaActual.querySelector(".clima").textContent = "Despejado";
        if(tiempoParcialmenteNublado){
            $diaActual.querySelector(".dia-actual-icon").src = "assets/nublado-dia.svg";
            $diaActual.querySelector(".clima").textContent = "Parcialmente nublado";
        };
        if(tiempoNublado){
            $diaActual.querySelector(".dia-actual-icon").src = "assets/nublado-total.svg";
            $diaActual.querySelector(".clima").textContent = "Nublado";
        };
        if(tiempoLluvia){
            $diaActual.querySelector(".dia-actual-icon").src = "assets/lluvia.svg";
            $diaActual.querySelector(".clima").textContent = "LLuvioso";
        };
        if(tiempoNieve){
            $diaActual.querySelector(".dia-actual-icon").src = "assets/nieve.svg";
            $diaActual.querySelector(".clima").textContent = "Nevando";
        };
    }
    else{
        $diaActual.querySelector(".dia-actual-icon").src = "assets/noche.svg";
        $diaActual.querySelector(".clima").textContent = "Despejado";
        if(tiempoParcialmenteNublado){
            $diaActual.querySelector(".dia-actual-icon").src = "assets/nublado-noche.svg";
            $diaActual.querySelector(".clima").textContent = "Parcialmente nublado";
        };
        if(tiempoNublado){
            $diaActual.querySelector(".dia-actual-icon").src = "assets/nublado-total.svg";
            $diaActual.querySelector(".clima").textContent = "Nublado";
        };
        if(tiempoLluvia){
            $diaActual.querySelector(".dia-actual-icon").src = "assets/lluvia.svg";
            $diaActual.querySelector(".clima").textContent = "LLuvioso";
        };
        if(tiempoNieve){
            $diaActual.querySelector(".dia-actual-icon").src = "assets/nieve.svg";
            $diaActual.querySelector(".clima").textContent = "Nevando";
        };
    };

    $dia2.querySelector(".dia-2-icon").src = "assets/dia.svg";
    $dia2.querySelector(".dia-2-clima").textContent = "Despejado";
    if(tiempoParcialmenteNubladoDia2){
        $dia2.querySelector(".dia-2-icon").src = "assets/nublado-dia.svg";
        $dia2.querySelector(".dia-2-clima").textContent = "Parcialmente nublado";
    };
    if(tiempoNubladoDia2){
        $dia2.querySelector(".dia-2-icon").src = "iassets/nublado-total.svg";
        $dia2.querySelector(".dia-2-clima").textContent = "Nublado";
    };
    if(tiempoLluviaDia2){
        $dia2.querySelector(".dia-2-icon").src = "assets/lluvia.svg";
        $dia2.querySelector(".dia-2-clima").textContent = "LLuvioso";
    };
    if(tiempoNieveDia2){
        $dia2.querySelector(".dia-2-icon").src = "assets/nieve.svg";
        $dia2.querySelector(".dia-2-clima").textContent = "Nevando";
    };


    $dia3.querySelector(".dia-3-icon").src = "assets/dia.svg";
    $dia3.querySelector(".dia-3-clima").textContent = "Despejado";
    if(tiempoParcialmenteNubladoDia3){
        $dia3.querySelector(".dia-3-icon").src = "assets/nublado-dia.svg";
        $dia3.querySelector(".dia-3-clima").textContent = "Parcialmente nublado";
    };
    if(tiempoNubladoDia3){
        $dia3.querySelector(".dia-3-icon").src = "assets/nublado-total.svg";
        $dia3.querySelector(".dia-3-clima").textContent = "Nublado";
    };
    if(tiempoLluviaDia3){
        $dia3.querySelector(".dia-3-icon").src = "assets/lluvia.svg";
        $dia3.querySelector(".dia-3-clima").textContent = "LLuvioso";
    };
    if(tiempoNieveDia3){
        $dia3.querySelector(".dia-3-icon").src = "assets/nieve.svg";
        $dia3.querySelector(".dia-3-clima").textContent = "Nevando";
    };


    $dia4.querySelector(".dia-4-icon").src = "assets/dia.svg";
    $dia4.querySelector(".dia-4-clima").textContent = "Despejado";
    if(tiempoParcialmenteNubladoDia4){
        $dia4.querySelector(".dia-4-icon").src = "assets/nublado-dia.svg";
        $dia4.querySelector(".dia-4-clima").textContent = "Parcialmente nublado";
    };
    if(tiempoNubladoDia4){
        $dia4.querySelector(".dia-4-icon").src = "assets/nublado-total.svg";
        $dia4.querySelector(".dia-4-clima").textContent = "Nublado";
    };
    if(tiempoLluviaDia4){
        $dia4.querySelector(".dia-4-icon").src = "assets/lluvia.svg";
        $dia4.querySelector(".dia-4-clima").textContent = "LLuvioso";
    };
    if(tiempoNieveDia4){
        $dia4.querySelector(".dia-4-icon").src = "assets/nieve.svg";
        $dia4.querySelector(".dia-4-clima").textContent = "Nevando";
    };
};