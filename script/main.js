//* Carrossel
const containerCarrossel = document.querySelector('.container-carrossel');
const imagens = document.querySelectorAll('.container-carrossel img');

let contador = 0;

function slider(){
    contador++;
    if(contador > 4){
        contador = 0;
    }
    containerCarrossel.style.transform = `translateX(${-contador * 40}vw)`
}
setInterval(slider,3000);


//* Menu lateral

function abrirMenu(){
    document.querySelector('.menu-options').style.right = '0';
}
function fecharMenu(){
    document.querySelector('.menu-options').style.right = '-200px';
}


document.getElementById('open-options').addEventListener('click',abrirMenu);
document.querySelector('.close-options').addEventListener('click',fecharMenu);