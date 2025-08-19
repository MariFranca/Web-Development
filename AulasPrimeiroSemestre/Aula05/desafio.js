function obterNome(){
    insiraNome = prompt("Insira swu nome: ");
}

function obterIdade(){
    insiraIdade = prompt("Insira sua idade: ");
}
function exibirMensagemm(nome, idade){
    alert(`Nome:  ${nome}\nIdade: ${idade}`);
}
function iniciarPrograma(){
    const nome = obterNome();
    const idade = obterIdade();
    exibirMensagem(nome,idade);
}
iniciarPrograma();




