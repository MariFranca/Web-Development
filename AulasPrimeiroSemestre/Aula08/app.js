const form = document.getElementById('form')
const inputName = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputAssunto = document.getElementById('assunto')
const inputMensagem = document.getElementById('mensagem')
const bntEnviar = document.getElementById('bntEnviar')
const mensagemErro = document.getElementById('mensagem-erro')
const cadastroUsuatios = document.getElementById('cadastroUsuarios')

bntEnviar.addEventListener("click", function (event) {
    event.preventDefault()
        const nome = inputName.value
        const email = inputEmail.value

        if(nome === "" || email === ""){
            mensagemErro.textContent = "Preencha os campos vazios"
            mensagemErro.style.color = "#ff0000"
            //mensagemErro.classList.add('mensagemAlerta')
            //mensagemErro.src = ""
            return
        }
        
        let cardUsuario = document.createElement('div')
        cardUsuario.innerHTML = `
        <h3> Nome: ${nome} </h3>
        <p> E-mail: ${email}</p>
        `

        cadastroUsuatios.append(cardUsuario)

        form.reset()

})