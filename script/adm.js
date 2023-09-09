const senhaCorreta = "123456";

const campoSenha = document.getElementById('campo-senha')
const inputSenha = document.getElementById('senha'); 


const campoConfig = document.getElementById('campo-configuracoes')

const verificarSenha = () => {
   if(inputSenha.value == ""){
        alert("Digite uma senha por favor");
   }else{
        if(inputSenha.value === senhaCorreta){
            campoSenha.classList.add('hidden');
            campoConfig.classList.remove('hidden');
        }else{
            alert("Senha inválida");
        }
   }
}


document.getElementById('botao-senha').addEventListener('click',verificarSenha);


// Botao adicionar livro e Verificar Estoque

const campoAddLivro = document.getElementById('form-addlivro')
const campoEstoque = document.getElementById('estoquelivro')

function abrirCampoAddLivro(){
    campoAddLivro.classList.toggle('hidden')
    campoEstoque.classList.add('hidden');
}

function abrirCampoEstoque(){
    campoEstoque.classList.toggle('hidden');
    campoAddLivro.classList.add('hidden')
}

document.getElementById('add-livro').addEventListener('click',abrirCampoAddLivro);
document.getElementById('ver-estoque').addEventListener('click',abrirCampoEstoque);




// Campo cadastro

