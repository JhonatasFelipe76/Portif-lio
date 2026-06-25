// pega o formulário
let form = document.getElementById("formContato");

// Quando o botão enviar é apertado a função enviar mensagem é chamada
form.addEventListener("submit", enviarMensagem);

// função que válida os campos e envia a mensagem
function enviarMensagem(enviar){

    enviar.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // verifica se os campos estão vazios
    if (nome == "" || email == "" || mensagem == "") {
        alert("Os campos devem ser preenchidos!")
    
    } // verifica se o email está válido
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("Digite um e-mail válido!")

   
    }  // avisa ao usuário que sua mensagem foi enviada
    else {
        alert("Mensagem enviada com sucesso!");

        form.reset(); // reseta o formulario após ele ser enviado
    }


};