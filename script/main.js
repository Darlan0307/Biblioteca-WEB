// Digitando animação
function ativaLetra(elemento){
    const arrLetras = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrLetras.forEach((letra,i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        },75*i);
    })
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo)

setInterval(()=>ativaLetra(titulo),6500);

//*slider
var swiper = new Swiper(".swiper",{
    cssMode: true,
    loop: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el: ".swiper-pagination",
    },
    Keyboard: true,
});

//TODO Catalogo de todas as imagens

const catalogo = [
    {'id':1,'imagem':'fabula-1.jpg','genero':'fabula'},
    {'id':2,'imagem':'fabula-2.jpg','genero':'fabula'},
    {'id':3,'imagem':'fabula-3.jpg','genero':'fabula'},
    {'id':4,'imagem':'fabula-4.jpg','genero':'fabula'},
    {'id':5,'imagem':'fantasia-1.jpg','genero':'fantasia'},
    {'id':6,'imagem':'fantasia-2.jpg','genero':'fantasia'},
    {'id':7,'imagem':'fantasia-3.jpg','genero':'fantasia'},
    {'id':8,'imagem':'fantasia-4.jpg','genero':'fantasia'},
    {'id':9,'imagem':'fantasia-5.jpg','genero':'fantasia'},
    {'id':10,'imagem':'ficcao-1.jpg','genero':'ficcao'},
    {'id':11,'imagem':'ficcao-2.jpg','genero':'ficcao'},
    {'id':12,'imagem':'ficcao-3.jpg','genero':'ficcao'},
    {'id':13,'imagem':'ficcao-4.jpg','genero':'ficcao'},
    {'id':14,'imagem':'ficcao-5.jpg','genero':'ficcao'},
    {'id':15,'imagem':'romance-1.jpg','genero':'romance'},
    {'id':16,'imagem':'romance-2.jpg','genero':'romance'},
    {'id':17,'imagem':'romance-3.jpg','genero':'romance'},
    {'id':18,'imagem':'romance-4.jpg','genero':'romance'},
    {'id':19,'imagem':'romance-5.jpg','genero':'romance'},
    {'id':20,'imagem':'terror-1.jpg','genero':'terror'},
    {'id':21,'imagem':'terror-2.jpg','genero':'terror'},
    {'id':22,'imagem':'terror-3.jpg','genero':'terror'},
    {'id':23,'imagem':'terror-4.jpg','genero':'terror'},
    {'id':24,'imagem':'terror-5.jpg','genero':'terror'},
];

//* Carrossel
const containerCarrossel = document.querySelector('.container-carrossel');
const imagens = document.querySelectorAll('.container-carrossel img');

let contador = 0;

function slider(){
    contador++;
    if(contador > 4){
        contador = 0;
    }
    containerCarrossel.style.transform = `translateX(${-contador * 800}px)`
}
setInterval(slider,2000);


//* Menu lateral

function abrirMenu(){
    document.querySelector('.menu-options').style.right = '0';
}
function fecharMenu(){
    document.querySelector('.menu-options').style.right = '-200px';
}


document.getElementById('open-options').addEventListener('click',abrirMenu);
document.querySelector('.close-options').addEventListener('click',fecharMenu);

//* Campo do código de ADM

function verificarUsuario(){
    const senhaCorreta = "123456";
    const senhaTeste = prompt("Digite a senha do ADM");

    if(senhaTeste === senhaCorreta){
        alert("Senha correta! Redirecionando para o link específico...");
        
        window.location.href = "https://github.com/Darlan0307/Biblioteca-WEB";
    }else{
        alert("senha incorreta");
    }

}

document.getElementById('codigo-fonte').addEventListener('click',verificarUsuario);


// Campo cadastro

const campoCadastro = document.querySelector('.campo-cadastro')

function closeFieldRegister(){
    campoCadastro.classList.add('hidden');
}

function openFieldRegister(){
    campoCadastro.classList.remove('hidden');
}

document.getElementById('close-cadastro').addEventListener('click',closeFieldRegister);
document.getElementById('abrir-cadastro').addEventListener('click',openFieldRegister);

// Campo login

const campoLogin = document.querySelector('.campo-login')

// close-login  abrir-login
function closeFieldLogin(){
    campoLogin.classList.add('hidden');
}

function openFieldLogin(){
    campoLogin.classList.remove('hidden');
}

document.getElementById('close-login').addEventListener('click',closeFieldLogin);
document.getElementById('abrir-login').addEventListener('click',openFieldLogin);










// Verificando o cadastro

let temCadastro = 0;

function recebendoCadastro(){
    temCadastro = 1;
}

document.querySelector('.form').addEventListener('subimt',(e) => {
    e.preventDefault();

    recebendoCadastro();
});

let btnsReceberLivro = document.querySelectorAll('.receber-livro');

function verificarCadastro(){
    
   alert("Seu livro chegará em breve no seu email");

}

btnsReceberLivro.forEach(btn => btn.addEventListener('click', verificarCadastro));


function mensagemAgradecimento(){
    alert('Obrigado pelo interesse, fique de olho no seu e-mail')
}

document.getElementById('cadastrar').addEventListener('click',mensagemAgradecimento);

