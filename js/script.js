// pega o formulário
let form = document.getElementById("formContato");


// Quando o botão enviar é apertado a função enviar mensagem é chamada
form.addEventListener("submit", enviarMensagem);
//Função que limpa mensagem
function limparMensagem(){
    setTimeout(function (){
        let mensagemValida = document.getElementById("mensagemValida");

        mensagemValida.innerHTML = "";
        mensagemValida.className = "";
    }, 2000);
}



// função que válida os campos e envia a mensagem
function enviarMensagem(enviar){

    enviar.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    let mensagemValida = document.getElementById("mensagemValida");

    // verifica se os campos estão vazios
    if (nome == "" || email == "" || mensagem == "") {
        mensagemValida.className = "mensagemErro";
        mensagemValida.innerHTML = "Todos os campos devem estar preenchidos!";

        limparMensagem();
    
    } // verifica se o email está válido
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1){
        mensagemValida.className = "mensagemErro";
        mensagemValida.innerHTML = "Digite um e-mail válido";
        limparMensagem();
   
    }  // avisa ao usuário que sua mensagem foi enviada
    else {
        mensagemValida.className = "mensagemSucesso";
        mensagemValida.innerHTML = "Mensagem enviada com sucesso!";
        limparMensagem();

        form.reset(); // reseta o formulario após ele ser enviado
    }




};