function showMessage(){
    alert('Cargando pronostico del clima.');
}
function removerCookie(element) {
    element.closest('.footer').remove();
}
function changeTemperature(element) {
    let opcion = element.value;
    let temperaturas = document.querySelectorAll('.max > span, .min > span');
    console.log(temperaturas);

    if(opcion == 'f'){
        for(let i = 0; i < temperaturas.length; i ++){
            let temperatura = temperaturas[i].innerText;
            let temperaturaFinal = (temperatura * 1.8) + 32;
            temperaturas[i].innerText = Math.round(temperaturaFinal);
        }
    }
    else{
        for(let i = 0; i < temperaturas.length; i ++){
            let temperatura = temperaturas[i].innerText;
            let temperaturaFinal = (temperatura - 32) / 1.8;
            temperaturas[i].innerText = Math.round(temperaturaFinal);
        }
    }
}