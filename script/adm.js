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
