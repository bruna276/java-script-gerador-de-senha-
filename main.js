constnumeroSenha = document.querySelector('.parametro-senha_texto');
lettamanhoSenha = 12;
numerosenha.textContent=tamanhoSenha;
constletrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
constletrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
constnumeros = '0123456789';
constbotoes = document.querySelectorAll('.parametro-senha_botao');
constsimbolos = 'l@%*?';
constcampoSenha = document.querySelector('#campo-senha');
constcheckbox = document.querySelectorAll('.checkbox');
constforcaSenha = document.querySelector('.forca');
botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;
function diminuiTamanho() {
    if (tamanhoSenha > 1) {
 // tamanhoSenha = tamanhoSenha-1;
tamanhoSenha--;
}
    numerosSenha.textContent = tamanhoSenha;
    geraSenha();

}

function aumentaTamanho() {

    if (tamanhoSenha < 20) {
// tamanhoSenha = tamanhoSenha+1;
tamanhoSenha++;
    }}{
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();

}
for (i = 0; i <checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
    
}
    
    geraSenha();
    
    function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
    
    }
    
    if (checkbox[1].checked) {
    alfabeto = alfabeto + letrasMinusculas;
    
    }
    
    if (checkbox[2].checked) {
    
    alfabeto = alfabeto + numeros;
    
    }
    
    if (checkbox[3].checked) {
    
    alfabeto = alfabeto + simbolos;
    
    }
    
    let senha = '';
    
    for (let i = 0; i <tamanhoSenha; i++) {
    
    letnumeroAleatorio = Math.random()* alfabeto.length;
    
    numeroAleatorio = Math.floor(numeroAleatorio);
    
    senha = senha + alfabeto [numeroAleatorio];    
    }
    
    campoSenha.value = senha;
    
    classificaSenha();
    
    }

    function classificsenha(){
        forcasenha.classList.remove('fraca','media','forte');
        if (tamanhoSenha>11){
            forcaSenha.classList.add('forte')
        }
        else if (tamanhoSenha> 5 &&tamanhoSenha<12) {
            forcaSenha.classList.add('media');
    }
    else if (tamanhoSenha<= 5) {
        forcaSenha.classList.add('fraca');

}
}

       