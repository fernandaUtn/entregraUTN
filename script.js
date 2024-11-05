/*video*/

// script para controlar el video  
document.addEventListener('DOMContentLoaded', function() {  
    const video = document.getElementById('myVideo');  
    const playButton = document.getElementById('play');  
    const pauseButton = document.getElementById('pause');  
    const showTime = document.getElementById('showTime');  

    playButton.addEventListener('click', function() {  
        video.play();  
    });  

    pauseButton.addEventListener('click', function() {  
        video.pause();  
    });  

    video.addEventListener('timeupdate', function() {  
        const minutes = Math.floor(video.currentTime / 60);  
        const seconds = Math.floor(video.currentTime % 60);  
        showTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;  
    });  
});  






 /* video */ 

function desplegar() {
    let submenu = document.querySelector(".tema");
    submenu.classList.toggle("tema-block")
}
function desptemaDia() {
    let body = document.querySelector("body");
    body.classList.remove()
    body.classList.add("body-day")
}
function temaNoche() {
    let body = document.querySelector("body");
    body.classList.remove()
    body.classList.add("body-night")
}



let menu= document.querySelector('.menu');
let flag=false;
let contador=0;



function iniciar(){
    var imagenes=document.querySelectorAll('#cajaimagenes img');
     soltar=document.getElementById('cajasoltar');  
     soltar2  =document.getElementById('cajasoltar2'); 
     soltar3 = document.getElementById('cajasoltar3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        // imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
      
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
     e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++


}
function reinicio() {
    window.location.reload();
}
iniciar()
//window.addEventListener('load', iniciar, false);

